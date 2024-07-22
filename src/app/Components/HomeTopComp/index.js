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
import Entypo from 'react-native-vector-icons/Entypo';
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
          height: windowHeight / 6,
          width: '100%',
        }}>
        <LineChart.Provider data={data}>
          <LineChart height={windowHeight / 6} width={windowWidth} style={{}}>
            <LineChart.Path animateOnMount="foreground" width={2} />
          </LineChart>
        </LineChart.Provider>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: '20%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: '5%',
            width: '50%',
            height: '100%',
          }}>
          <Text
            style={[
              styles.text,
              {fontSize: windowHeight / 45, textAlign: 'left'},
            ]}>
            Portfolio Value
          </Text>
          <Text
            style={[
              styles.text,
              {fontSize: windowHeight / 20, textAlign: 'left'},
            ]}>
            12.547 g
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            paddingHorizontal: '5%',
            // backgroundColor: COLORS.red,
            width: '40%',
            height: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              height: '50%',
            }}>
            <Entypo name="triangle-up" size={24} color={COLORS.green} />
            <Text style={styles.text}>402(0.12%)</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '100%',
              height: '50%',
              // justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: COLORS.red,
            }}>
            <View
              style={{
                flexDirection: 'column',
                backgroundColor: COLORS.black,
                height: '70%',
                width: '20%',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.text,
                    {color: COLORS.white, fontSize: windowHeight / 65},
                  ]}>
                  D
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                backgroundColor: COLORS.black,
                height: '70%',
                width: '20%',
                // borderTopLeftRadius: 10,
                // borderBottomLeftRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.text,
                    {color: COLORS.white, fontSize: windowHeight / 65},
                  ]}>
                  M
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: COLORS.black,
                height: '70%',
                width: '20%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.text,
                    {color: COLORS.white, fontSize: windowHeight / 65},
                  ]}>
                  Y
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <Text
            style={[
              styles.text,
              {fontSize: windowHeight / 20, textAlign: 'left'},
            ]}>
            12.547 g
          </Text> */}
        </View>
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
