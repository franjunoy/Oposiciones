import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const Buscador = ({ value, onChangeText, onClear, onSearch }) => {
  return (
    <View className='items-center mt-4'>
      <View className='w-11/12 h-10 border border-gray-300 rounded-lg px-3 flex-row items-center'>
        <TextInput
          placeholder='Buscar material'
          value={value}
          onChangeText={onChangeText}
          className='text-black flex-1'
        />
        {value ? (
          <TouchableOpacity onPress={onClear} className='mr-2'>
            <Text className='text-gray-500'>✖️</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={onSearch} className='ml-2'>
          <Text className='text-gray-500'>🔍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Buscador;
