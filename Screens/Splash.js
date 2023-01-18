import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Icon from 'react-native-vector-icons/FontAwesome';
export default function Splash() {
    const navigation=useNavigation();
    useEffect(() => {
        // setTimeout(() => {
        //     navigation.replace('Onboard');
        // }, 1000);
        

        AsyncStorage.getItem("UserData").then(valuen => {
                        
            if (valuen !== null ) {
                try{
                    var value= JSON.parse(valuen);
                    
                    if(value.isLoggedin === '1'){
                        navigation.navigate("HomeScreen")
                        
                    }
                    else{
                        setTimeout(() => {
                            navigation.replace('Onboard');
                        }, 1000);

                    }
                }catch(error){
                    console.log(error)
                }
                
                }
                else{
                    setTimeout(() => {
                        navigation.replace('Onboard');
                    }, 1000);

                }
        })

        
    }, []);


    return (
        <LinearGradient colors={['#f99f00', '#db3069']} style={styles.linearGradient}>
        <View>
        {/* <Icon name="film" size={60} color="white" style={styles.ImageStyle} /> */}
           
        <Image style={styles.ImageStyle} 
        source={require('../assets/movie_trailer.png')}/>
           <Text style={styles.text}>Movie Trailer</Text>
        </View>
        </LinearGradient>
    )
}

const styles=StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    
    },
    ImageStyle :{
        top: 300,
        alignContent:'center',
        left:150,
        height:70,
        width:70
       
    },
    text:{
        top :300,
        textAlign:'center',
        fontSize:25,
        padding:10,
        color:'white'
        

    }
})