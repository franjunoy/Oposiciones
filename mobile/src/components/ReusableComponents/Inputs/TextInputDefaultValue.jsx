import { useState } from "react"
import { Text, TextInput, View } from "react-native"


export default TextInputDefaultValue = ({defaultValue, setValue, label, placeholder, icon, value}) => {
                    
    const [divBlue, setDivBlue] = useState(false)
   
    const onFocusDivBlue = (e) => {        
        setDivBlue(!divBlue)
    }

    const onBlurDivBlue = (e) => {
        setDivBlue(false)
      }

      const onChange = (text) => {    
        setValue(text)
    };
    
    return (
        <View className="flex  items-start w-full">
        {label && <Text className={`w-full h-7 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] pb-1 md:mb-[10px]`}>{label}</Text>}
            <View className={`flex flex-row px-4 h-[44px] md:h-14 w-full  bg-white border rounded  items-center justify-start  ${divBlue ? "border-blue-300" : 'border-gray-300'} `}>
                 {icon &&
                    <View className="icon w-6 h-6">
                        {icon}
                    </View>
                }
                <TextInput
                    defaultValue={defaultValue}                    
                    onChangeText={onChange}
                    placeholder={placeholder}
                    className={`pl-3 w-full text-[#23254C] text-base md:text-[22px] font-normal font-lato leading-normal`}
                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}
                    value={value}                         
                />               
            </View>            
    </View>
    )
}