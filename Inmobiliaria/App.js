
import * as React from 'react';
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
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
 
          <ListHouses />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
