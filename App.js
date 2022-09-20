import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from "./src/navigators/HomeNavigator"

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}