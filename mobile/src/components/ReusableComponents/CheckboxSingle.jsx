import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";

const CheckboxSingle = ({ label, setValue }) => {
  const [isChecked, setIsChecked] = useState(false);
  

  useEffect(() => {    
    if (isChecked) {
        setValue(label.value);   
    }
  }, [isChecked]);

  
  return (
    <View className=" main flex justify-start flex-row"  key={label.value} >
      <Checkbox value={isChecked} onValueChange={setIsChecked} />
      <Text className="pl-3">{label.name}</Text>
    </View>
  );
};

export default CheckboxSingle;
