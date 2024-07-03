import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import CardsConBoton from '../../components/ReusableComponents/CardsConBoton';
import BarraDeAbajo from '../../components/ReusableComponents/BarraDeAbajo';
import CampanaSVG from '../../../assets/svg/CampanaSVG';
import Filtros from '../../components/ReusableComponents/Filtros';
import { useSelector } from 'react-redux';

const ModulosScreen = () => {
  const [isBarVisible, setIsBarVisible] = useState(true);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setIsBarVisible(offsetY <= 0);
  };
  return (
    <View className='flex-1 bg-gray-100'>
      <ScrollView className='p-4 mt-4' onScroll={handleScroll}>
        <View className='w-full flex-row justify-between items-center mb-4'>
          <Text className='text-xl font-bold text-teal-900'>Mis Modulos</Text>

          <TouchableOpacity>
            <CampanaSVG />
          </TouchableOpacity>
        </View>

        <View className='w-full mb-2'>
          <Filtros
            filtro1='Modulos'
            filtro2='En progreso'
            filtro3='Completados'
          />
        </View>

        <View className=' justify-center items-center'>
          <CardsConBoton />
        </View>
        <View className='h-16'></View>
      </ScrollView>
      {isBarVisible && (
        <View className='absolute bottom-0 w-full'>
          <BarraDeAbajo />
        </View>
      )}
    </View>
  );
};

export default ModulosScreen;
