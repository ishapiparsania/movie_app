import React from "react";
import { View, Text,TouchableOpacity,ImageBackground,StyleSheet, SafeAreaView,Image} from 'react-native';
import stranger from '../assets/nhie.jpeg'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { hp } from "../components/Dimensons";


const Screen2=()=>{
    const navigation=useNavigation();


    return(
        

        
        <View style={styles.container}>
                  
            <ImageBackground source={stranger} 
                            resizeMode="cover" 
                            style={styles.image}>
                <LinearGradient colors={['transparent','rgba(255, 202, 110, 0.81)']} 
                   style={{flex:1}}>
                        <View style={styles.box}>
                       <TouchableOpacity style={styles.input} onPress={()=>navigation.navigate('Screen3')}>
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
                       <Text style={styles.text1}>Know the movie is</Text>
                       <Text style={styles.text1}>worth Watching</Text>
                       </View>
                       </SafeAreaView>
                      
                       
               </LinearGradient>
                    </ImageBackground>
           
        </View>
        
        )
        }

export default Screen2
const styles = StyleSheet.create({
    text :{
        paddingTop:400
    },
    text1 :{
        fontSize:37,
        color:'white',
        textAlign:'center'

    },
    box:{
        top: 670,
        left: 120

    },
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
        ImageStyle1:{
            bottom:2
        }
})



