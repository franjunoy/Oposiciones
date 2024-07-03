import { useState } from "react"
import { Image, Text, TextInput, View } from "react-native"
import search from "../../../assets/icons/search.png"


export default SearchInputs = ({value, setValue, label, placeholder, icon, extra}) => {
                    
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
        {label && <Text className={`${w ? w : "w-[30%]"} h-7 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] pb-1 md:mb-[10px]`}>{label}</Text>}
            <View className={`flex flex-row px-4 h-[44px] md:h-14 w-full  bg-white border rounded  items-center justify-start shadow-lg shadow-black  ${divBlue ? "border-blue-300" : 'border-gray-300'} ${extra} `}>
                <View className="icon w-6 h-6 justify-center items-center">
                    {icon && icon}
                </View>
                <TextInput
                    value={value}                    
                    onChangeText={onChange}
                    placeholder={placeholder}
                    className={`pl-3 w-full text-[#23254C] text-base md:text-[22px] font-normal font-lato leading-normal`}
                    onBlur={((e) => onBlurDivBlue(e))}
                    onFocus={((e) => onFocusDivBlue(e))}                         
                />               
            </View>            
    </View>
    )
}