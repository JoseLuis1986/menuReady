import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <ImageBackground
          source={require('../assets/images/pasapalos.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                BOCADOS 
            </Text> 
        </ImageBackground> 
        <ImageBackground
          source={require('../assets/images/carnes.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                CARNES 
            </Text>
        </ImageBackground> 
        <ImageBackground
          source={require('../assets/images/mariscos.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                PESCADOS 
            </Text>
        </ImageBackground> 
        <ImageBackground
          source={require('../assets/images/ensaladas.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                ENSALADAS 
            </Text>
        </ImageBackground> 
        <ImageBackground
          source={require('../assets/images/postres.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                POSTRES 
            </Text>
        </ImageBackground> 
        <ImageBackground
          source={require('../assets/images/bebidas.jpg')}
          imageStyle={{resizeMode:'stretch'}}
          style={styles.adittional}>
            <Text style={styles.text}>
                BEBIDAS  
            </Text>
        </ImageBackground>       
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  adittional: {
    height: Height/4,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'space-mono',
    paddingVertical: 50,
    textAlign: 'center',
    textShadowColor:'black',
    textShadowOffset: {width: 4, height: 4},
    textShadowRadius: 5,
  },
});
