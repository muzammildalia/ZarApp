import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import TopTab from '../TopTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../Constants/COLORS';
// import DrawerNav from '../DrawerNavigation';
import Home from '../../Screens/StackScreens/Home';

const MainStudentNav = () => {
  const Stack = createNativeStackNavigator();

  const CustomHeader = ({navigation, options}) => {

    return (
      <View style={styles.customHeader}>
        <View style={{flexDirection: 'column', width: '38%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Text style={styles.backButton}>back</Text> */}
            <Ionicons name="arrow-back-circle" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'column',
            // backgroundColor: 'red',
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.headerText}>{options.title}</Text>
        </View>
        {/* <Text></Text> */}
      </View>
    );
  };
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      style={{}}
      screenOptions={{
        header: props => <CustomHeader {...props} />,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="TabNav"
        component={TopTab}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          
        }}
        
      /> */}
      {/* <Stack.Screen
        name="Attend"
        component={AttendenceInquiry}
        options={{
          title: 'Settings',
          // Add additional screen-specific options here
        }}
        // options={{
        //   header: () => {
        //     <View
        //       style={{
        //         height: '30%',
        //         width: '100%',
        //         elevation: 25,
        //         borderBottomStartRadius: 20,
        //         borderBottomEndRadius: 20,
        //         backgroundColor: COLORS.themeColor,
        //         flexDirection: 'column',
        //         justifyContent: 'space-between',
        //       }}>
        //       <Text>Hello</Text>
        //     </View>;
        //   },
        // }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStudentNav;
const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  customHeader: {
    height: WindowHeight / 10,
    width: '100%',
    elevation: 25,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: COLORS.themeColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
  },
  headerText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 20,
    margin: 16,
  },
});
