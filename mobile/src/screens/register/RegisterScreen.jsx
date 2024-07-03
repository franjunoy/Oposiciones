import React from 'react';
import { View } from 'react-native';
import RegisterComponent from '../../components/ReusableComponents/RegisterComponent';

const RegisterScreen = () => {
  return (
    <View>
      <RegisterComponent
        title={'Registrate'}
        subTitle={'Comienza hoy tu cuenta en Esfera oposiciones'}
      />
    </View>
  );
};

export default RegisterScreen;
