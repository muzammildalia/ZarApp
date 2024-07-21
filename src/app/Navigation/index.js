import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSelector} from 'react-redux';
import MainStudentNav from './MainStudentNav';
import AuthNavigation from './AuthNavigation';

const MainNavigation = () => {
  const AuthState = useSelector(state => {
    return state?.AuthReducer.LoginUser;
  });
  return (
    <NavigationContainer>
      {/* {AuthState ? <MainStudentNav /> : <AuthNavigation />} */}
      <MainStudentNav />
    </NavigationContainer>
  );
};

export default MainNavigation;
