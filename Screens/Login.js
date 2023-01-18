import React,{useEffect, useState} from 'react'


import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { View, Text,
TouchableOpacity,
TextInput,
StyleSheet
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login=()=> {
    const navigation=useNavigation();
    useEffect( () =>
    {
        AsyncStorage.getItem("UserData").then(valuen => {
                        
            if (valuen !== null ) {
                try{
                    var value= JSON.parse(valuen);
                    // console.log(value)
                    if(value.isLoggedin === '1'){
                        navigation.navigate("HomeScreen")
                        // alert("already loged in")
                    }
                }catch(error){
                    console.log(error)
                }
                
                }
        })
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidError, setEmailValidError] = useState('');
    const [passwordValidError, setPasswordValidError] = useState('');
    const handleValidEmail = val => {
        
        if (val.length === 0) {
        setEmailValidError('* email address must be entered');
        } 
        
        else  {
        setEmailValidError('');
        }
    };
    const handleValidPassword = val => {
        
        if (val.length === 0) {
        setPasswordValidError('* password must be enter');
        }  else  {
        setPasswordValidError('');
        }
    };

    const setData = async() => {
        

        if((email === '' && password === '') || email === '' || password === ''){
            alert('email password required')
            return;
        }else{

        await AsyncStorage.getItem("UserDatadb").then(value => {
        
        if (value !== null && email !== '' && password !== '') {
            try{
                var updatedData = JSON.parse(value)
                var userD =  updatedData.find(key =>  key.email === email && key.password === password )
                if (userD) {
                    var user= {
                        email: userD.email,
                        password: userD.password,
                        token : userD.token,
                        id:userD.id,
                        isLoggedin:'1',
                        image:userD.image
                    }
                    AsyncStorage.setItem('UserData',JSON.stringify(user));
                    // console.log(user)
                    //AsyncStorage.setItem("isLoggedIn",'1')
                    alert("Login successfull");
                    navigation.navigate('HomeScreen')
                }
                else{
                    alert("Username Password Incorrect")
                    // AsyncStorage.setItem("isLoggedIn",0)

                    navigation.navigate('Login')
                }
            // });

            }catch(error){
                console.log(error)
            }
            
            }else{
                alert("No Data available")
            }
        })
    }
    

    }

return(

<LinearGradient colors={['#f99f00', '#db3069']} style={styles.linearGradient}>

<SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<TextInput
            style={styles.input}
            value={email}
            placeholder={"Email"}
            // textAlign="center"
            placeholderTextColor = "#ffff"
            // onChangeText={(text) => setEmail(text)}
            onChangeText={value => {setEmail(value);handleValidEmail(value); }}
            autoCapitalize={"none"}
            keyboardType='email-address'
        />

{emailValidError ? <Text style={{color:"red"}}>{emailValidError}</Text> : null}

        
        <TextInput
            style={styles.input}
            value={password}
            // textAlign="center"
            placeholder={"Password"}
            placeholderTextColor = "#ffff"
            keyboardType="default"
            secureTextEntry
            onChangeText={value => {setPassword(value);handleValidPassword(value);}}
        />
        {passwordValidError ? <Text style={{color:"red"}}>{passwordValidError}</Text> : null}

<TouchableOpacity style={styles.input} onPress = {setData} >
<Text style={{color:'#ffff',fontSize:18,textAlign:'center'}}>Login</Text>
</TouchableOpacity>

<View style={{
                flexDirection:'row',
                justifyContent:'space-evenly',
                paddingTop:20
                
        }}>

    <TouchableOpacity>
    <Text style={{color:'#ffff',fontSize:18}}>forget password</Text>
    </TouchableOpacity>

    <Text style={{color:"#ffff",paddingLeft:20,fontSize:18}}>|</Text>

    <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
        <Text style={{color:'#ffff',paddingLeft:20,fontSize:18}}>Register</Text>
    </TouchableOpacity>

    </View>




</SafeAreaView>

</LinearGradient>




)}

var styles = StyleSheet.create({
    inputcontainer:{
         alignItems:'center',
         paddingTop:250  
    },

linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5

},
input:{
        
    borderColor: '#dadae8',
    borderWidth: 2,
    color:'#ffff',
    width:'75%',
    padding:15,
    borderRadius:30,
    marginVertical:10,
    fontSize:18
    
},



});

export default Login