import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CardHome from '../../../assets/svg/CardHome'; // Asegúrate de que la ruta es correcta

const CardFormaciones = ({ formations }) => {
  return (
    <View className='flex-row justify-center items-center mt-4'>
      {formations?.payload?.map((formation) => (
        <TouchableOpacity className='mr-2' key={formation._id}>
          <View className='w-36 h-40 p-2 bg-white rounded-lg shadow-md'>
            <View className='items-center'>
              <CardHome />
            </View>
            <View className='w-48 items-start '>
              <Text
                className='text-teal-900 text-[9px] font-bold mt-1 w-32'
                numberOfLines={2}
                ellipsizeMode='tail'
              >
                {formation.nombre}
              </Text>
              <Text
                className='text-teal-700 text-[6px] mt-0.5 w-32'
                numberOfLines={2}
                ellipsizeMode='tail'
              >
                {formation.descripcion}
              </Text>
              <Text className='text-teal-700 text-[6px] mt-0.5'>
                {'⭐ 4.7'}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CardFormaciones;
