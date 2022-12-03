import * as React from 'react';
import 'react-native-gesture-handler';
import MyTabs2 from './components/MyTabs2';
import { store } from "./app/store";
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <Provider store={store}>
      <MyTabs2 />
    </Provider>
  );
}