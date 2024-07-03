import React from 'react';
import { View, Text } from 'react-native';
import Button from './Buttons/Button';
import Button2 from './Buttons/Button2';

const OptionComponent = ({ data, navigateToLogin, navigateToRegister }) => {
  return (
    <>
      {data.map((item, index) => (
        <View key={index} className='justify-center items-center'>
          <View className='w-[320px] h-[210px] justify-center items-center'>
            {item.image}
          </View>

          <View className='w-[347px] h-[80px] justify-center items-center'>
            <Text className='text-center text-teal-900 text-3xl font-bold'>
              {item.title}
            </Text>
          </View>

          <View className='w-[250px] h-[65px] justify-center items-center'>
            <Text className='text-center text-gray-500 text-base'>
              {item.subtitle}
            </Text>
          </View>
        </View>
      ))}

      <View className='w-[80%] h-[50px] top-5 justify-center items-center'>
        <Button text={'Iniciar Sesión'} onPress={navigateToLogin} />
      </View>
      <View className='w-[80%] h-[50px] top-8 justify-center items-center'>
        <Button
          secondary={true}
          text={'Probar 14 días'}
          onPress={navigateToRegister}
        />
      </View>
    </>
  );
};

export default OptionComponent;
