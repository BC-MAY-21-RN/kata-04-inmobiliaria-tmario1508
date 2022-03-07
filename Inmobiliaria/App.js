
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  SectionList,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { CardHouse } from './src/components/Card';
import { ListHouses } from './src/components/ListHouses';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <NavigationContainer>
        <Navigation />
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  marginList: {
    marginEnd: 100,
  },
  
  
});

export default App;
