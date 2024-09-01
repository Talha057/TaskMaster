import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/auth/Onboarding';
import SignOption from '../screens/auth/SignOption';
import SignUp from '../screens/auth/SignUp';
import Signin from '../screens/auth/SignIn';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onboarding">
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignOption" component={SignOption} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={Signin} />
    </Stack.Navigator>
  );
};

export default AuthStack;
