import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelectedButton } from '../../../context/SelectedButtonContext';
import HomeSVG from '../../../assets/svg/sideBar/HomeSVG';
import BookSVG from '../../../assets/svg/sideBar/BookSVG';
import GloboSVG from '../../../assets/svg/sideBar/GloboSVG';
import PersonSVG from '../../../assets/svg/sideBar/PersonSVG';

const BarraDeAbajo = () => {
  const navigation = useNavigation();
  const { selectedButton, setSelectedButton } = useSelectedButton();

  const navigateTo = (screen, button) => {
    setSelectedButton(button);
    navigation.navigate(screen);
  };

  return (
    <View className='flex-row bg-teal-700 items-center justify-center w-full h-16 fixed bottom-0'>
      <TouchableOpacity
        onPress={() => navigateTo('HomeScreen', 'Home')}
        className={`mx-6 ${
          selectedButton === 'Home' ? 'bg-green-50' : ''
        } p-2 rounded-lg `}
      >
        <HomeSVG className='text-white' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo('ModulosScreen', 'Book')}
        className={`mx-6 ${
          selectedButton === 'Book' ? 'bg-green-50' : ''
        } p-2 rounded-lg `}
      >
        <BookSVG className='text-white' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedButton('Globo')}
        className={`mx-6 ${
          selectedButton === 'Globo' ? 'bg-green-50' : ''
        } p-2 rounded-lg `}
      >
        <GloboSVG className='text-white' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateTo('PerfilScreen', 'Person')}
        className={`mx-6 ${
          selectedButton === 'Person' ? 'bg-green-50' : ''
        } p-2 rounded-lg  `}
      >
        <PersonSVG className='text-white' />
      </TouchableOpacity>
    </View>
  );
};

export default BarraDeAbajo;
