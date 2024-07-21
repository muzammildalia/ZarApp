import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import StudentNav from '../StudentNav';
// import ForgotPassword from '../../Screen/Auth/ForgotPassword';
// import TopTab from '../TopTab';
import Login from '../../Screens/AuthScreens/Login';
import Register from '../../Screens/AuthScreens/Register';
const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      style={{backgroundColor: '#ffffff'}}
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Calender" component={CalenderScreen} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      {/* <Stack.Screen
        name="Dashboard"
        // component={StudentNav}
        component={TopTab}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
