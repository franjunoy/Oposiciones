import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import CardModulo from '../../../assets/svg/CardModulo';
import { useSelector } from 'react-redux';

const CardsConBoton = () => {
  const { formacion, modulos } = useSelector((state) => state.cursoRedurcer);

  const [bloqueado, setBloqueado] = useState(false);

  let percentage = 50;

  let subTitle2 =
    'Organización del Estado. Derecho Administrativo General. Gestión de Personal y Gestión Financiera';
  return (
    <>
      {modulos?.map((modulo, index) => (
        <View
          key={modulo._id}
          className=' w-88 h-32 flex-row items-center p-2 bg-white rounded-lg shadow-md m-2'
        >
          <CardModulo />
          <View className='w-[333px] h-[77px] flex-initial justify-center m-2 mb-2'>
            <Text className='text-teal-900 text-base font-bold'>
              {modulo.nombre}
            </Text>
            <Text
              className='text-teal-700 text-start w-[200px] h-[28px] text-sm'
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {modulo.descripcion}
            </Text>
            <Text
              className='text-teal-700 text-start w-[200px] h-[40px] text-xs'
              numberOfLines={2}
              ellipsizeMode='tail'
            >
              {subTitle2}
            </Text>
            <View className='flex-row items-center'>
              <View className='w-[155px] flex-col'>
                <Progress.Bar
                  className='w-[144px] h-[6px] mt-0.5'
                  progress={percentage / 100}
                  color={'#00707E'}
                />
                {bloqueado ? (
                  <Text className='w-[165px] text-gray-600 text-left text-[6px]'>
                    {'Podras acceder al completar el modulo anterior'}
                  </Text>
                ) : (
                  <Text className='w-[142px] text-gray-600 text-right text-[9px]'>
                    {`${percentage}% completado`}
                  </Text>
                )}
              </View>
              <View className='-ml-1'>
                {bloqueado ? (
                  <TouchableOpacity className='w-[60px] h-[17px] bg-[#00707E] items-center justify-center rounded-sm'>
                    <Text className='text-white font-latoBold text-xs'>
                      Bloqueado
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity className='w-[60px] h-[17px] bg-[#00707E] items-center justify-center rounded-sm'>
                    <Text className='text-white font-latoBold text-xs'>
                      Continuar
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default CardsConBoton;
