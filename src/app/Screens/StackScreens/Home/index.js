import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../Constants/COLORS';
import LinearGradient from 'react-native-linear-gradient';
import HomeTopComp from '../../../Components/HomeTopComp';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{flexDirection: 'row', height: '40%'}}>
        <HomeTopComp />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
