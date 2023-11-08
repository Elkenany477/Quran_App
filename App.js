/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import SplashScren from './Screens/Splash'
// import OnBoarding from './Screens/Onboarding'

import NavigaScreens from './Navigation/index'

import { Colors } from './Constants/Colors/Themes';

import { useNavigation, NavigationContainer } from '@react-navigation/native'



const App = () => {
  return (
    <NavigationContainer>
      <NavigaScreens />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

export default App;
