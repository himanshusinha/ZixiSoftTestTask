// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import {
  GetDataScreen,
  LoginScreen,
  SignUpScreen,
  SplashScreen,
  UploadScreen,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={routes.SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={routes.UPLOAD_SCREEN} component={UploadScreen} />
        <Stack.Screen name={routes.GET_DATA_SCREEN} component={GetDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
