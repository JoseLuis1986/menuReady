import React from "react";
import * as WebBrowser from 'expo-web-browser';
//import { View, StyleSheet, Text, Image } from "react-native";
import BackgroundImg from '../components/BackgroundImg';

export default function LoginScreen() {
  return(
      <BackgroundImg/>
  )
}

LoginScreen.navigationOptions = {
  header: null,
};
