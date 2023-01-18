import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,Image,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { wp ,hp } from "../components/Dimensons"; 
import ImagePicker from 'react-native-image-crop-picker';




const Register = (props) => {
    const navigation=useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Id, setId] = useState('');
    const [Phone, setPhone] = useState('');
    const [pin, setPin] = useState('');
    const [Address, setAddress] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    const [passwordValidError, setPasswordValidError] = useState('');

    const [phoneValidError, setPhoneValidError] = useState('');
    const [pinValidError, setPinValidError] = useState('');
    const [emailValidError, setEmailValidError] = useState('');
    const [image,setImage]=useState("https://unloc.online/wp-content/uploads/2020/04/283-2833820_user-icon-orange-png.png");

    const takePhotoLibrary=()=>{
      ImagePicker.openPicker({
        width: 300,height: 400,cropping: true
      }).then(image => {
        // console.log(image);
        // dispatch(AddProfileImg(image.path))
        // setImage(ImageData)
        setImage(image.path)
      });
      }
    



    const handleValidEmail = val => {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (val.length === 0) {
      setEmailValidError('* email address must be enter');
      } else if (reg.test(val) === false) {
      setEmailValidError('* enter valid email address i.e  abc@gmail.com');
      } else if (reg.test(val) === true) {
      setEmailValidError('');
      }
  };


  const handleValidPassword = val => {
      let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      if (val.length === 0) {
      setPasswordValidError('* password must be enter');
      } else if (reg.test(val) === false) {
      setPasswordValidError('* enter valid password');
      } else if (reg.test(val) === true) {
      setPasswordValidError('');
      }
  };

  const handleValidNumber = val => {
      let reg = /^[0]?[789]\d{9}$/;
      if (val.length === 0) {
      setPhoneValidError('* phone number must be enter');
      } else if (reg.test(val) === false) {
      setPhoneValidError('* enter valid number');
      } else if (reg.test(val) === true) {
      setPhoneValidError('');
      }
  };


  const handleValidPin = val => {
      let reg = /^[1-9][0-9]{5}$/;
      if (val.length === 0) {
      setPinValidError('* pincode must be enter');
      } else if (reg.test(val) === false) {
      setPinValidError('* enter valid pincode');
      } else if (reg.test(val) === true) {
      setPinValidError('');
      }
  };

  const register = async() => {
    if(email !== '' && password !== '' && Id !== '' && Phone !=='' && pin !=='' && Address!=='' ){
        if(emailValidError === '' && phoneValidError===''){
        const arrayData = [];
        const userDetails = {
        email : email,
        password : password,
        id: Id,
        phone:Phone ,
        pin : pin,
        address : Address,
        token : Math.random(),
        image:image
    }
    arrayData.push(userDetails);
    // console.log(arrayData)
    try{
        AsyncStorage.getItem("UserDatadb").then(value => {
        if (value !== null) {
            const d = JSON.parse(value);
            d.push(userDetails);
            
            AsyncStorage.setItem("UserDatadb", JSON.stringify(d)).then(
            () => {
              
                navigation.navigate('Login');
                alert("Registered Successfully")
            }
            );
        } else {
            AsyncStorage.setItem(
                "UserDatadb",
                JSON.stringify(arrayData)
            ).then(() => {
                navigation.navigate('Login')
                alert("Registered Successfully")
            });
        }
        });
    }catch(error){
        console.log(error);

    }
    }else{
        alert('invalid data entered');
        return;
    }
}else{  
        alert("Please enter data");
        return;
        }

    }
  
  return (

    <LinearGradient colors={['#f99f00', '#db3069']} style={styles.linearGradient}>
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={takePhotoLibrary}>
     <View style={{alignSelf:'center'}}>
        <Image source={{uri :image}} style={styles.Imagestyle} />
    </View>
    </TouchableOpacity>

{/* <TouchableOpacity style={styles.addButton} onPress={takePhotoLibrary}>
   
    <Image source={{uri :image}} style={styles.profileImage1} />
    </TouchableOpacity> */}
      <TextInput
                style={styles.input}
                value={Id}
                // textAlign="center"
                placeholder={"Username"}
                placeholderTextColor = "#ffff"
                onChangeText={(text) => setId(text)}
                autoCapitalize={"none"}
            />
            

            <TextInput
                style={styles.input}
                value={email}
                // textAlign="center"
                placeholder={"Email Id"}
                keyboardType='email-address'
                returnKeyType='next'
                placeholderTextColor = "#ffff"
                onChangeText={value => {setEmail(value);handleValidEmail(value); }}
                autoCapitalize={"none"}
            />
            {emailValidError ? <Text style={{color:"red",fontWeight:'bold'}}>{emailValidError}</Text> : null}

            <TextInput
                style={styles.input}
                value={password}
                // textAlign="center"
                placeholder={"Password"}
                //maxLength={5}
                placeholderTextColor = "#ffff"
                secureTextEntry
                onChangeText={value => {setPassword(value);handleValidPassword(value);}}
                //onChangeText={(text) => setPassword(text)}
                />

               {passwordValidError ? <Text style={{color:"red",fontWeight:'bold'}}>{passwordValidError}</Text> : null}

            

            <TextInput
                style={styles.input}
                value={Phone}
                // textAlign="center"
                placeholder={"Phone number"}
                keyboardType= "numeric"
                //validators={['required', 'isNumber','maxNumber:11']}
                maxLength={10}
                placeholderTextColor = "#ffff"
                // onChangeText={(text) => setPhone(text)}
                onChangeText={value => {setPhone(value);handleValidNumber(value);}}
                autoCapitalize={"none"}

            />
            {phoneValidError ? <Text style={{color:"red",fontWeight:'bold'}}>{phoneValidError}</Text> : null}


            <TextInput
                style={styles.input}
                value={Address}
                // textAlign="center"
                placeholder={"Address"}
                placeholderTextColor = "#ffff"
                
                onChangeText={(text) => setAddress(text)}
                />

            <TextInput
                style={styles.input}
                value={pin}
                // textAlign="center"
                placeholder={"Pin Code"}
                placeholderTextColor = "#ffff"
                onChangeText={value => {setPin(value);handleValidPin(value); }}
                // onChangeText={(text) => setPin(text)}
                />

            {pinValidError ? <Text style={{color:"red",fontWeight:'bold'}}>{pinValidError}</Text> : null}

      <TouchableOpacity  style={styles.input} onPress ={register}>
              <Text style={{color:'#ffff',fontSize:18,textAlign:'center'}}>Register</Text>
          </TouchableOpacity>
        <View style={{flexDirection:'row',top:20}}>
        <Text style={{color:'#ffff',fontSize:16,textAlign:'center'}}>Already have an account ?</Text>
        <TouchableOpacity  onPress ={()=>navigation.navigate("Login")}>
              <Text style={{color:'#ffff',fontSize:16,textAlign:'center',fontWeight:'bold',textDecorationLine:'underline',left:5}}>Login Here</Text>
          </TouchableOpacity>
        </View>
    
      </SafeAreaView>
    
    </LinearGradient>
    

  );
};

var styles = StyleSheet.create({

  imagebox:{
    backgroundColor:'white',
    top:10,
    width:20,
    height:20

  },
  profileImage:{
    justifyContent:'center',
    alignItems:'center' ,
    bottom:3,
    width:115,
    height:115,
    backgroundcolor:'white'
  },
linearGradient: {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5

},
input:{
  // top:-30,
      
  borderColor: '#dadae8',
  borderWidth: 2,
  color:'#ffff',  
  width:'75%',
  padding:12,
  borderRadius:30,
  marginVertical:10,
  fontSize:18
  
},
addButton:{
  top:hp('4%'),
  position:'absolute',
  backgroundColor: "transparent",
  width:120,
  height: 120,
  borderRadius:75,
  marginLeft :310,
  borderColor:'white',
  borderWidth:3

},
profileImage1:{
  width:114,
  height:114,
  borderRadius:75,
},

Imagestyle:{
  width:110,
  height:110,
  borderRadius:75,
  bottom:30,
  borderWidth:2,
  borderColor:'white'
  
},



});
export default Register;
