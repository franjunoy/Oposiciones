import React from 'react';
import { View } from 'react-native';
import LoginComponent from '../../components/ReusableComponents/LoginComponent';

const LoginScreen = () => {
  return (
    <View>
      <LoginComponent
        title={'Bienvenido de nuevo! 👋'}
        subTitle={'Inicia sesión con tu cuenta de Esfera oposiciones'}
      />
    </View>
  );
};

export default LoginScreen;
