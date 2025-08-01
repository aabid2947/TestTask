/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import WingsFlyApp from './src/screens/WingsFlyScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   <WingsFlyApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
