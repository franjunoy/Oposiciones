import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ text, onPress, secondary, icon, disable, w, h }) => {
  return (
    <TouchableOpacity
      className={`button ${w ? w : 'w-full'} ${
        h ? h : 'h-[46]'
      } flex justify-center items-center rounded-lg mx-4 shadow shadow-black ${
        icon ? ' flex-row justify-center px-6 ' : 'justify-center'
      }  ${secondary ? 'bg-[#ffffffab] shadow-none' : 'bg-[#ffffffe3] '} ${
        secondary ? 'border border-gray-500' : 'border border-[#00707E]' // Agregar borde color #00707E
      } ${disable ? 'opacity-20' : null}  `}
      onPress={disable ? null : onPress}
    >
      {icon && icon}
      <Text
        className={`font-latoBold text-lg ${
          secondary ? 'text-black' : 'text-[#00707E]'
        } ${icon ? 'ml-6' : ''}`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
