import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import CardSVG from '../../../assets/svg/CardSVG';

const Cards = ({ modulos }) => {
  let percentage = 50;
  let puntaje = 4.9;

  return (
    <>
      {modulos?.map((modulo) => (
        <TouchableOpacity key={modulo._id}>
          <View className='w-94 h-20 flex-row items-center p-4 bg-white rounded-lg shadow-md mt-2'>
            <CardSVG className='' />
            <View className='flex flex-col justify-center items-start ml-2 mt-7'>
              <Text className='text-teal-900 text-xs font-bold text-start'>
                {modulo.nombre}
              </Text>
              <Text className='text-teal-700 text-xs text-start'>
                {modulo.descripcion}
              </Text>
              <Text className='text-teal-700 text-xs mt-1 text-start'>{`⭐ ${puntaje}`}</Text>
              <Progress.Bar
                progress={percentage / 100}
                width={210}
                color={'#00707E'}
                height={1}
                className='mt-1 text-start'
              />
              <Text className='text-gray-600 text-xs'>
                {`${percentage}% completado`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default Cards;
