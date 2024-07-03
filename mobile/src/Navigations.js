import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import OptionScreen from './screens/option/OptionScreen';
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import ModulosScreen from './screens/modulos/ModulosScreen';
import PerfilScreen from './screens/perfil/PerfilScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='OnboardingScreen'
        component={OnboardingScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />
      <Stack.Screen
        name='OptionScreen'
        component={OptionScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />

      <Stack.Screen
        name='ModulosScreen'
        component={ModulosScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />

      <Stack.Screen
        name='PerfilScreen'
        component={PerfilScreen}
        options={{ headerShown: false, statusBarColor: 'black' }}
      />
    </Stack.Navigator>
  );
};
export default Navigator;
