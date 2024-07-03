import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VolverSVG from '../../../../assets/svg/loginRegister/VolverSVG';

const ButtonArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View className='border rounded-full w-12 h-12 border-gray-400 justify-center items-center mt-2 ml-3'>
        <VolverSVG />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonArrow;
