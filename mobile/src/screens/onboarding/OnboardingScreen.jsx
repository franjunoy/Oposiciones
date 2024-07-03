import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CarouselComponent } from '../../components/ReusableComponents/CarouselComponent';
import FirstScreenSVG from '../../../assets/svg/carrusel/FirstScreenSVG';

const OnboardingScreen = () => {
  const [page, setPage] = useState(0);
  const navigation = useNavigation();

  const carouselData = [
    {
      image: <FirstScreenSVG />,
      title: '¡Prepárate para tus oposiciones!',
      subtitle:
        'Cursos especializados, sigue tu progreso y alcanza tus metas profesionales.'
    },
    {
      image: <FirstScreenSVG />,
      title: 'Domina tus oposiciones',
      subtitle:
        'Accede a cursos de calidad, realiza seguimiento de tu progreso y alcanza el éxito.'
    },
    {
      image: <FirstScreenSVG />,
      title: 'Completa tu examen con éxito',
      subtitle:
        'Continúa tu camino hacia el éxito con nuestra comunidad de funcionarios.'
    },
    {
      image: <FirstScreenSVG />,
      title: 'Un plan basado en IA',
      subtitle:
        'Utilizamos la inteligencia artificial como motor para tu futuro.'
    }
  ];

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const navigateToOption = () => {
    navigation.navigate('OptionScreen');
  };

  return (
    <View className='main flex justify-center items-center flex-1'>
      <CarouselComponent
        data={carouselData}
        page={page}
        handleNext={handleNext}
        navigateToOption={navigateToOption}
      />
    </View>
  );
};

export default OnboardingScreen;
