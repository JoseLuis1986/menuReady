import React from 'react'
import { 
    ImageBackground, 
    View, Text, 
    StyleSheet, 
    Dimensions, 
    TextInput,
    TouchableOpacity, 
    Alert
 } from 'react-native'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

//Accesorios
export default class BackgroundImg extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state={
            Id_User: '',
            UserPassword: ''
        }
    }
     UserLoginFunction = () => {
         console.log('exitoso')
         const { Id_User } = this.state;
         const { UserPassword } = this.state;

         fetch('https://reactnativecode.ooowebhostapp.com/User_Login.php', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 id_user: Id_User,
                 password: UserPassword
             })
         }).then((response) => response.json())
                .then((responseJson)=> {
                    if(responseJson === 'Data Matched')
                    {
                        const { navigation } = this.props.navigation.navigate('Links',{ID_USER: Id_User});
                    }else{
                        Alert.alert(responseJson);
                    }
                }).catch((error) => {
                    console.log(error);
                })
     }
    render() {
        return (
            <ImageBackground 
                source ={require('../assets/images/menuReady.jpeg')} 
                imageStyle={{resizeMode:'stretch'}}
                style={styles.adittional}>                   
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            BIENVENIDOS  
                        </Text> 
                            <TextInput style={styles.inputBox}
                                onChangeText={(Id_User) => this.setState({Id_User})}
                                underlineColorAndroid='rgba(0,0,0,0)' 
                                placeholder="Usuario"
                                placeholderTextColor = "#002f6c"
                                selectionColor="#fff"
                                keyboardType="email-address"
                                onSubmitEditing={()=> this.password.focus()}
                            />
                                <TextInput style={styles.inputBox}
                                    onChangeText={(UserPassword) => this.setState({UserPassword})} 
                                    underlineColorAndroid='rgba(0,0,0,0)' 
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor = "#002f6c"
                                />

                            <TouchableOpacity style={styles.button}> 
                                <Text style={styles.buttonText} 
                                onPress={this.UserLoginFunction}>INGRESAR
                                </Text>  
                                {/* {this.props.type} */}
                            </TouchableOpacity>
                    </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    adittional: {
        height: Height/1
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
    },
    text: {
        color: 'white',
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
    }
});
