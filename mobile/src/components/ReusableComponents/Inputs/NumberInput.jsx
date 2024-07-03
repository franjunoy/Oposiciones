import { useState } from "react"
import { Text, TextInput, View } from "react-native"


export default NumberInput = ({value, setValue, label, placeholder, icon, pin}) => {
                    
    const [divBlue, setDivBlue] = useState(false)
   
    const onFocusDivBlue = (e) => {        
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

      const onChange = (text) => {    
        setValue(text.replace(/[^0-9]/g, ''));
    };
    
    return (
        <View className="flex  items-start w-full">
        {label && <Text className={`w-full h-7 font-latoRegular text-base md:text-sm leading-6 text-[#23254C] pb-1`}>{label}</Text>}
            <View className={`flex flex-row px-4 h-[44px] md:h-14 w-full  bg-white border rounded  items-center justify-start  ${divBlue ? "border-blue-300" : 'border-gray-300'} `}>
                 {icon &&
                    <View className="icon w-6 h-6">
                        {icon}
                    </View>
                }
                <TextInput
                    value={value}
                    keyboardType="numeric"                                                                               
                    onChangeText={onChange}
                    placeholder={placeholder}
                    className={`pl-3 w-full text-[#23254C] text-base font-normal font-lato leading-normal`}
                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}   
                    maxLength={pin ? 4 : undefined}                      
                />               
            </View>            
    </View>
    )
}