import 'react-native-gesture-handler';
import {StyleSheet, StatusBar, Text, View} from 'react-native';
import {useRef, useState} from 'react';
import Splash from './src/app/SplashScreen';
import {Provider} from 'react-redux';
import {persistor, store} from './src/app/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {COLORS} from './src/app/Constants/COLORS';
import {PaperProvider} from 'react-native-paper';
import MainNavigation from './src/app/Navigation';
export default function App() {
  const [splash, setSplash] = useState(true);
  const statusheight = StatusBar.currentHeight;
  return (
    <Provider store={store}>
      <PaperProvider>
        <PersistGate loading={null} persistor={persistor}>
          {/* onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))} */}
          <View style={{flex: 1}}>
            <StatusBar barStyle={'default'} style="light" />

            {splash ? (
              <Splash splash={splash} setSplash={setSplash} />
            ) : (
              <MainNavigation />
            )}
            <FlashMessage
              position="center"
              statusBarHeight={statusheight}
              style={{borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}
            />
          </View>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
