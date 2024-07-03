import React, { useState, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/screens/redux/store/store';
import axios from 'axios';
import { View, Platform, SafeAreaView, ActivityIndicator } from 'react-native';
import Navigator from './src/Navigations';
import {
  NavigationContainer,
  useNavigationState
} from '@react-navigation/native';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic
} from '@expo-google-fonts/lato';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { enableScreens } from 'react-native-screens';

import { SelectedButtonProvider } from './context/SelectedButtonContext';

export default function App() {
  // axios.defaults.baseURL = 'http://192.168.0.4:8082';  //leandro
  axios.defaults.baseURL = 'http://192.168.0.101:8082'; //fran
  //axios.defaults.baseURL = 'http://192.168.1.244:8083'; //Santi

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false
    })
  });
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [isLoadingNotif, setIsLoadingNotif] = useState(false);

  async function registerForPushNotificationsAsync() {
    let token;

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = await Notifications.getDevicePushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId
      });
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      });
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId
    });
    await AsyncStorage.setItem('deviceToken', token.data);

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(async (token) => {
        setExpoPushToken(token);
      })
      .catch((e) => {});

    //Event Listeners
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const {
          notification: {
            request: {
              content: {
                data: { screen }
              }
            }
          }
        } = response;

        if (screen) {
        }
      });
    enableScreens();

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 }}>
          <SelectedButtonProvider>
            <NavigationContainer>
              <View style={{ flex: 1 }}>
                <Navigator />
              </View>
            </NavigationContainer>
          </SelectedButtonProvider>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const NavContainer = () => {
  const [showNav, setShowNav] = useState(false);
  const state = useNavigationState((state) => state);

  useEffect(() => {
    const screensWithoutNav = [
      'Login',
      'Register',
      'ResetPassword',
      'WelcomeScreen',
      'VerifyScreen'
    ];
    const routeName = state ? state.routes[state.index].name : '';
    if (!screensWithoutNav.includes(routeName)) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [state]);

  return showNav && state ? <Nav /> : <View />;
};
