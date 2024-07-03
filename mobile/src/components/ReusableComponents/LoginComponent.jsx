import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/ReusableComponents/Buttons/Button';
import ButtonArrow from '../../components/ReusableComponents/Buttons/ButtonArrow';
import AppleSVG from '../../../assets/svg/loginRegister/AppleSVG';
import GoogleSVG from '../../../assets/svg/loginRegister/GoogleSVG';
import FacebookSVG from '../../../assets/svg/loginRegister/FacebookSVG';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/FirebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest } from '../../peticiones/auth';
import { setUsers } from '../../screens/redux/reducer/userReducer';
import { useDispatch } from 'react-redux';
import {
  setFormaciones,
  setModulos,
  setTemas
} from '../../screens/redux/reducer/cursoRedurcer';

const LoginComponent = ({ title, subTitle }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        loginRequest({
          email: email,
          success: (v) => {
            AsyncStorage.setItem('Token', v.payload.token),
              dispatch(setUsers(v.payload.user));
            dispatch(setFormaciones(v.payload.user.formacion));
            dispatch(setModulos(v.payload.user.formacion.modulos));

            navigation.navigate('HomeScreen');
          },
          error: (e) => console.log(e),
          loading: (l) => console.log('cargando', l)
        });
      }
    } catch (error) {
      Alert.alert(error.code, error.message);
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View className='flex flex-col items-center'>
      <View className='flex flex-row items-center w-full'>
        <View>
          <ButtonArrow />
        </View>
        <View className='flex-1 mr-14'>
          <Text className='text-center text-zinc-900 text-xl font-bold mt-3'>
            Iniciar sesión
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='flex-1 justify-center items-center'>
          <View className='w-[358px] h-full items-center mt-2'>
            <View className='h-[40px] justify-center items-start'>
              <Text className='text-center text-teal-900 text-2xl font-bold'>
                {title}
              </Text>
            </View>
            <View className='h-[65px] justify-center items-start'>
              <Text className='text-gray-500 text-sm'>{subTitle}</Text>
            </View>
            <View>
              <Text className='text-teal-900 text-base'>Email</Text>
              <TextInput
                className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
                placeholder='Ingresa tu email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              />
            </View>
            <View className='mt-6'>
              <Text className='text-teal-900 text-base'>Contraseña</Text>
              <TextInput
                className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
                placeholder='Ingresa tu contraseña'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <View className='w-[320px] h-[20px] flex flex-row items-center mt-4'>
                <TouchableOpacity onPress={toggleCheckbox}>
                  <Icon
                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                    size={20}
                    color='#6C6C6C'
                  />
                </TouchableOpacity>
                <Text className='text-[#6C6C6C] text-xs ml-2'>Recordarme</Text>
                <TouchableOpacity>
                  <Text className='text-[#6C6C6C] text-xs ml-14'>
                    ¿Has olvidado la contraseña?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className='w-[300px] h-[50px] mt-12 justify-center items-center'>
              <Button text='Ingresar' onPress={handleLogin} />
            </View>
            <View className='w-[270px] h-[22px] mt-2 flex flex-row justify-center items-center'>
              <Text className='text-[#6C6C6C] text-xs'>
                ¿Aún no tienes cuenta?
              </Text>
              <TouchableOpacity onPress={navigateToRegister}>
                <Text className='border-teal-900 text-xs underline ml-1'>
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>
            <View className='mt-16 flex flex-col items-center'>
              <Text className='text-[#6C6C6C] text-xs mb-2'>
                O inicia sesión con
              </Text>
              <View className='flex flex-row mt-2'>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <GoogleSVG />
                </TouchableOpacity>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <AppleSVG />
                </TouchableOpacity>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <FacebookSVG />
                </TouchableOpacity>
              </View>
            </View>
            <View className='h-[150px]'></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginComponent;
