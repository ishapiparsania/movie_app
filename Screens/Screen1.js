import React from "react";
import { View, Text,TouchableOpacity,ImageBackground,StyleSheet,SafeAreaView,Image} from 'react-native';
import got from '../assets/larajean.png'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { hp } from "../components/Dimensons";





const Screen1=()=>{
    const navigation=useNavigation();

  
    return(
        <View style={styles.container}>
            <ImageBackground source={got} 
                            resizeMode="cover" 
                            style={styles.image}>
               <LinearGradient colors={['transparent','rgba(22, 190, 251, 0.8)']} 
                   style={{flex:1}}>

                <View style={styles.box}>
                       <TouchableOpacity 
                       style={styles.input}  onPress={()=>navigation.navigate('Screen2')}>
                           <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{color:'#ffff',
                                       fontSize:20,
                                       paddingRight:10
                                       
                                       }}>Next</Text>
                        <Image  style={styles.ImageStyle1} source={require('../assets/forward_arrow.png')} />
                </View>
                       </TouchableOpacity>
                       </View>
                        <SafeAreaView style={{top:hp('-15%')}}>
                        <View style={styles.text}>
                       <Text style={styles.text1}>Get the first </Text>
                       <Text style={styles.text1}> Movie and Tv information</Text>
                       </View>
                       </SafeAreaView>
                       </LinearGradient>

            </ImageBackground>
        </View>
        
        )
        }

export default Screen1
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    input:{

        borderColor: 'white',
        borderWidth: 2,
        color:'white',
        // backgroundColor:'rgba(16, 58, 132, 1)',
        width:'45%', 
        padding:10,
        borderRadius:30,
        marginVertical:8,
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
        ImageStyle1:{
            bottom:2
        }
        
})