import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, windowHeight, windowWidth} from '../../Constants/COLORS';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-wagmi-charts';

const HomeTopComp = () => {
  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];
  const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  return (
    <LinearGradient
      colors={['#FFD700', '#FFAC00']}
      style={[
        styles.linearGradient,
        {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: statusBarHeight,
        },
      ]}>
      <View
        style={{flexDirection: 'row', height: '10%', paddingHorizontal: '5%'}}>
        {/* <Text style={styles.text}>HomeTopComp</Text> */}
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: '5%'}}>
        <View
          style={{
            flexDirection: 'column',
            width: '70%',
            // justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={styles.text}>Muddasir</Text>
        </View>
        <View style={{flexDirection: 'column', width: '30%'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              style={{
                // flexDirection: 'column',
                width: '45%',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              {/* <SimpleLineIcons  */}
              <SimpleLineIcons name="graph" color="black" size={40} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // flexDirection: 'column',
                // width: '20%',

                width: '45%',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <MaterialIcons
                name="notifications-on"
                size={windowWidth / 12}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
        }}>
        <LineChart.Provider data={data}>
          <LineChart height={windowHeight / 6} width={windowWidth} style={{}}>
            <LineChart.Path />
          </LineChart>
        </LineChart.Provider>
      </View>
    </LinearGradient>
  );
};

export default HomeTopComp;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  text: {
    color: COLORS.black,
    fontSize: windowHeight / 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
