import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Filtros = ({ filtro1, filtro2, filtro3 }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (filtro) => {
    setSelected(filtro);
  };

  const getButtonStyle = (filtro) => {
    return selected === filtro ? 'bg-teal-900' : 'bg-transparent';
  };

  const getTextStyle = (filtro) => {
    return selected === filtro ? 'text-white' : 'text-teal-900';
  };

  return (
    <View className='items-center justify-center flex flex-col mt-4'>
      <View className='flex flex-row justify-between'>
        <View
          className={`border rounded-full border-teal-900 mx-1 ${getButtonStyle(
            filtro1
          )}`}
        >
          <TouchableOpacity onPress={() => handleSelect(filtro1)}>
            <Text
              className={`font-latoBold text-sm font-bold rounded-full px-3 py-1 ${getTextStyle(
                filtro1
              )}`}
            >
              {filtro1}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className={`border rounded-full border-teal-900 mx-1 ${getButtonStyle(
            filtro2
          )}`}
        >
          <TouchableOpacity onPress={() => handleSelect(filtro2)}>
            <Text
              className={`font-latoBold text-sm font-bold rounded-full px-3 py-1 ${getTextStyle(
                filtro2
              )}`}
            >
              {filtro2}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className={`border rounded-full border-teal-900 mx-1 ${getButtonStyle(
            filtro3
          )}`}
        >
          <TouchableOpacity onPress={() => handleSelect(filtro3)}>
            <Text
              className={`font-latoBold text-sm font-bold rounded-full px-3 py-1 ${getTextStyle(
                filtro3
              )}`}
            >
              {filtro3}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Filtros;
