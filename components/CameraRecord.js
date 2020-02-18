import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import *as Permissions from 'expo-permissions'
import {Camera} from 'expo-camera';


export default class CameraRecord extends Component {
    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };

  async componentDidMount(){
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

render(){
  const { hasCameraPermission } = this.state;
  if (hasCameraPermission === null) {
    return <View />;
  }else if (hasCameraPermission === false) {
    return <Text>No acces to camera</Text>
  }else {
    return(
      <View>

      </View>
    )
  }
}
}

const styles = StyleSheet.create ({

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 15,
    marginBottom: 5,
    paddingVertical: 12
},
})
