import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import EmailSVG from "../../../assets/icons/EmailSVG";


const EmailInput = ({ setValue , value, label, placeholder }) => {
    
  const [email,setEmail] = useState(value)
  const [error, setError] = useState('')
  const [divBlue, setDivBlue] = useState(false);    
  const [isValid, setIsValid] = useState(true)

  const onFocusDivBlue = (e) => {
    setDivBlue(!divBlue);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };
  
 
  
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const onChange = (e) => {     
    setEmail(e.nativeEvent.text)
    const newEmail = e.nativeEvent.text;
    setIsValid(validateEmail(newEmail));
  };

  useEffect(() => {
    if (isValid) {
      setError('')
      setValue(email)
    } else  {
      setError('El email ingresado no es correcto')
      setValue('')
    }
  },[isValid, email])

  return (
    <View className="flex w-full items-start gap-1.5">        
        {label && <Text className="w-full h-5 font-latoRegular text-base md:text-[22px] leading-6 text-[#23254C] md:mb-[10px]">{label}</Text>}
        <View className={`flex flex-row w-full pr-2 flex-initial h-11 md:h-14 justify-around  bg-white border rounded items-center  ${divBlue ? "border-blue-300" : 'border-gray-300'}  ${error ? "border-red-300" : ''}`}>
          <View className="absolute pl-3.5">
            <EmailSVG />
          </View>
          <TextInput
            value={email}
            onChange={((e) => onChange(e))}
            placeholder={`${placeholder ? placeholder : 'ingrese su email' }`}
            autoCapitalize="none"
            className="w-full h-full text-[#23254C] text-base font-lato md:text-[20px] pl-[48] md:pl-[60]"  
            maxLength={50}
            onBlur={((e) => onBlurDivBlue(e))}
            onFocus={((e) => onFocusDivBlue(e))}              
            />
            
        </View>        
          {error ? <Text className="w-auto h-5 text-sm md:text-[18px] font-latoLight leading-6 text-red-500">{error}</Text> : <View className="w-auto h-5"/>} 
      </View>
    );
  };
  
  export default EmailInput;
  
  
  
  
  
  