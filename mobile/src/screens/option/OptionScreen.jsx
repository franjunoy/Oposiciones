import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FirstScreenSVG from '../../../assets/svg/carrusel/FirstScreenSVG';
import OptionComponent from '../../components/ReusableComponents/OptionComponent';

const OptionScreen = () => {
  const navigation = useNavigation();
  const carouselData = [
    {
      image: <FirstScreenSVG />,
      title: 'Desbloquea tu potencial!',
      subtitle: 'Ingresa a esfera oposiciones y consigue tu plaza.'
    }
  ];

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const navigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View className='main flex justify-center items-center flex-1'>
      <OptionComponent
        data={carouselData}
        navigateToLogin={navigateToLogin}
        navigateToRegister={navigateToRegister}
      />
    </View>
  );
};

export default OptionScreen;
