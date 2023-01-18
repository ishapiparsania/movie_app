import React from "react";
import { View, Text,TouchableOpacity,ImageBackground,StyleSheet,SafeAreaView} from 'react-native';
import la from '../assets/mebforeu.png'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { hp } from "../components/Dimensons";

const Screen3=()=>{
    const navigation=useNavigation();
    return(  
        <View style={styles.container}>
            <ImageBackground source={la} 
                            resizeMode="cover" 
                            style={styles.image}>
             
                <LinearGradient 
                colors={['transparent','rgba(239, 77, 77, 0.8)']} 
                   style={{flex:1}}>

                    
                    <View style={styles.box}>
                    
                       <TouchableOpacity 
                                        onPress={()=>navigation.navigate('Login')} >
                    <LinearGradient 
                    start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}}
                    colors={['#f99f00', '#db3069']} 
                    style={styles.input} >
                        <Text style={{color:'#ffff',
                                       fontSize:20,
                                       textAlign:'center'
                                       }}>Get started</Text>
                                       </LinearGradient>
                       </TouchableOpacity>
                       
                       </View>
                        <SafeAreaView style={{top:hp('-15%')}}>
                        <View style={styles.text}>
                       <Text style={styles.text1}>Real-time</Text>
                       <Text style={styles.text1}>updates movie Trailer</Text>
                       </View>
                       </SafeAreaView>
                   </LinearGradient>

            </ImageBackground>
        </View>
        
        )
        }

export default Screen3
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    input:{

        borderColor: 'transparent',
        borderWidth: 2,
        color:'white',
        // backgroundColor:'rgba(16, 58, 132, 1)',
        width:'45%', 
        padding:13,
        borderRadius:30,
        marginVertical:10,
        fontSize:18
        
        },
        text :{
            paddingTop:400
        },
        text1 :{
            fontSize:35,
            color:'white',
            textAlign:'center'
    
        },
        box:{
            top: 670,
            left: 120
            
    
        },
})