import * as React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export default class SearchPic extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View>
          <TouchableOpacity style={styles.button} onPress={this._pickImage}>
            <Text style={styles.buttonText}>EXAMINAR</Text>
          </TouchableOpacity>
        {/* {image &&
          <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />} */}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create ({
  // container: { 
  //   alignItems: 'center', 
  //   justifyContent: 'center', 
  //   flexDirection:'row',
  //   height:50,
  //   width:300,
  // },
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

});