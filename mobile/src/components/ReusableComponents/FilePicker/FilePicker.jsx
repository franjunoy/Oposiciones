import { View, Text, TouchableOpacity, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import SubirArchivoSVG from "../../../assets/icons/SubirArchivoSVG";
import { SetFileSelected, SetFileSelectedInfo, SetDeleteFileSelected } from "../../Redux/ReducerFilePicker";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const UploadFile = () => {
  
  const dispatch = useDispatch();
  const fileSelectedInfo = useSelector((state) => state.ReducerFilePicker.fileSelectedInfo);
  const [thumbnailUri, setThumbnailUri] = useState(null);
  const [pdfUri, setPdfUri] = useState(null);
    
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf/*", 
      });
            
      if (!result.canceled ) {              
        dispatch(SetFileSelectedInfo(result.assets[0]));       
        dispatch(SetFileSelected(result.assets[0].uri)); 
        setPdfUri(result.assets[0].uri);
      } else {
        console.log("La selección de archivo fue cancelada.");
      }
    } catch (error) {
      console.error("Error al seleccionar el archivo:", error);
    }
  };

  const pickImage = async () => { 
    try {
      const result = await ImagePicker.launchImageLibraryAsync(); 
      
      if (!result.canceled) { 
        dispatch(SetFileSelectedInfo(result.assets[0]));
        dispatch(SetFileSelected(result.assets[0].uri));        
        setThumbnailUri(result.assets[0].uri);
      } else {
        console.log("La selección de imagen fue cancelada.");
      }
    } catch (error) {
      console.error("Error al seleccionar la imagen:", error);
    }
  };

  return (
    <View className="main flex flex-col justify-center items-center w-full px-6 ">
      {!fileSelectedInfo ?   
        <View className="contenedor flex flex-col justify-center items-center border border-dashed border-[#156CF7] w-full p-4" >
          <SubirArchivoSVG />
          <Text className="label text-[#282A37] text-sm font-latoBold mt-3 ">
            Cargar documento
          </Text>
          <Text className="label text-[#282A37] text-sm font-latoRegular mt-3 mb-6 ">
           Presionar sobre tipo de archivo a cargar
          </Text>
          <View className="subirBotones flex flex-row items-center justify-around w-full">
            <TouchableOpacity onPress={() => pickDocument()}>
              <Text className="label text-[#515978] text-sm font-LatoBlack mt-3 ">
                cargar PDF
              </Text>
            </TouchableOpacity>
            <Text className="label text-[#515978] text-sm font-latoRegular mt-3 ">
              o
            </Text>
            <TouchableOpacity onPress={() => pickImage()}>
              <Text className="label text-[#515978] text-sm font-LatoBlack mt-3 ">
                cargar Imagen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View className="contenedor flex flex-col justify-center items-center border border-dashed border-[#156CF7] w-full p-4" >
          <Text className="label text-[#282A37] text-sm font-latoBold mt-3 ">
            Archivo cargado
          </Text>
          <Text className="label text-[#515978] text-sm font-latoRegular my-3 ">
            {fileSelectedInfo.name && 'PDF seleccionado' || 'Imagen seleccionada' }
          </Text>          
          {pdfUri ? (
            <Text className="label text-[#156CF7] text-sm font-latoRegular mt-3 ">
              {fileSelectedInfo.name}
            </Text>
          ) : (
            <Image source={{ uri: thumbnailUri }} style={{ width: 100, height: 100 }} />
          )}
          <TouchableOpacity onPress={()=> {dispatch(SetDeleteFileSelected()),setPdfUri(null),setThumbnailUri(null) }}>
            <Text className="label text-[#156CF7] text-sm font-latoRegular mt-3 ">
              Quitar archivo
            </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

export default UploadFile;
