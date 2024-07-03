import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  passwordClear,
  passwordEye,
} from "../../../assets/icons/svgIcons";
import PasswordSVG from "../../../assets/icons/PasswordSVG";


export default PasswordInput = ({ setValue, label, placeholder }) => {
  
  const [password, setPassword] = useState(null);  
  const [error, setError] = useState("");
  const [divBlue, setDivBlue] = useState(false);
  const [secureText, setSecureText] = useState(true);
  
  
  const onFocusDivBlue = (e) => {
    setDivBlue(!divBlue);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };
  
  

  const onChange = (e) => {
    let value = e.nativeEvent.text;
  
    if (value.length < 8 ) {
      setError('Minimum 8 characters');      
    } else {
      setError('');
    } 
    setPassword(value);
  };

  useEffect( () => {
    if(password && !error) setValue(password)
  },[password])

    return (
        <View className="flex  items-start">
            { label && <Text className='w-15 h-5 font-latoRegular text-base md:text-[22px] text-[#23254C] mb-1.5'>{label}</Text>}
            <View className={`flex px-3 flex-row w-full h-11 md:h-14 justify-between bg-white border rounded items-center  ${divBlue ? "border-blue-300" : 'border-gray-300'} ${error ? "border-red-300" : ''}`}>
                <View className="icon w-6 h-6">
                    <PasswordSVG />
                </View>
                <TextInput
                    secureTextEntry={secureText}
                    value={password}
                    onChange={((e) => onChange(e))}
                    placeholder={placeholder}
                    autoCapitalize="none"                    
                    className="pl-3 w-full text-[#23254C] text-base md:text-[22px] font-normal font-lato leading-normal"
                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}
                    
                />
                <View className={`absolute flex flex-row ${password ? "justify-center" : "justify-end mr-1"} w-[18%] right-1`}>
                <TouchableOpacity className="" onPress={() => setSecureText(!secureText)}>
                  {passwordEye}
                </TouchableOpacity>
              {
                password?        
                <TouchableOpacity className="relative" onPress={() => { setPassword(''); setError('')}}>
                  {passwordClear}

                </TouchableOpacity> : null
              }
            </View>

                
            </View>
            {error ? <Text className="w-[100%] h-5 text-sm md:text-18px font-latoLight leading-6 text-red-500 ">{error}</Text> : <View className="w-auto h-5"/>}
       
      
          
    </View>
  );
};
