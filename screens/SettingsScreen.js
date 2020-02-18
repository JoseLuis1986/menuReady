import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { tsConstructorType } from '@babel/types';
import SearchPic from '../components/SearchPic';
import CameraRecord from '../components/CameraRecord';
import { bind } from 'jest-each';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


export default class SettingsScreen extends Component {
constructor(props){
  super(props);
  console.log('the props im receiving => ', this.props);

  this.setState={text:""};
}

// onPressed () {
//   const { navigation } = this.props;
//   console.log(this.props);
// };

render(){
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput style={styles.inputBox}
            //onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Nombre"
            placeholderTextColor = "#002f6c"
            selectionColor="#fff"
            keyboardType="email-address"
          // onSubmitEditing={()=> this.password.focus()}
        />
            <TextInput style={styles.inputBox}
                //onChangeText={(password) => this.setState({password})} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Precio"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                keyboardType="numeric"
              // ref={(input) => this.password = input}
            />
            <View style= {styles.pickerStyle}>
              <ModalDropdown
              options={['option 1', 'option 2', 'option 3']}
              dropdownTextStyle={{width:290, fontSize:24}}
              style={{borderRadius:25}}
              textStyle={{fontSize:32, marginVertical:10, color:'#002f6c'}}
              />
            {/* <Picker 
                style={{width:320}}
                selectedValue={' '}
                mode={"dropDown"}
                itemStyle={{fontSize:32}}
               >
                 <Picker.Item label='Java' value='java'/>
                 <Picker.Item label='JavaScript' value='js'/>
                </Picker> */}
            </View>
                <TextInput
                style={styles.boxText}
                multiline={true}
                placeholder={"Descripcion aqui"}
                />
                <View style={styles.camera}>
                  <SearchPic/>
                </View>
            <TouchableOpacity style={styles.button} onPress={console.log("clicked")}> 
              <Text style={styles.buttonText}>INGRESAR</Text>  
              {/* {this.props.type} */}
            </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
}

SettingsScreen.navigationOptions = {
  title: 'NUEVO PRODUCTO',
};

const styles = StyleSheet.create({
container: {
    flex:1,
    height: Height/1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
},
text: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'Lobster-Regular',
    paddingBottom: 20,

},
inputBox: {
    width: 300,
    backgroundColor: '#eeeeee', 
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 32,
    color: '#002f6c',
    marginVertical: 10
},
boxText: {
    backgroundColor: '#eeeeee',
    fontSize: 32,
    paddingHorizontal: 16,
    width: 300,
    height: 200,
    textAlignVertical: "top",
    borderRadius: 25,
},
button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
},
buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
},
pickerStyle: {
    width:300,
    height: 50,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 16,
    fontSize: 32,
    marginVertical: 10,
    borderRadius: 25,
    overflow: 'hidden'
},
camera: { 
  alignItems: 'center', 
  justifyContent: 'center', 
  flexDirection:'row',
  height:50,
  width:300,
},
buttonCamera: {
  width: 150,
  height: 50,
  backgroundColor: '#4f83cc',
  borderRadius: 25,
  marginVertical: 15,
  marginBottom: 5,
  paddingVertical: 12
},
});