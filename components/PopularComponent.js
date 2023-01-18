import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from "@react-navigation/native";



const PopularComponent=(
  {
    title,
    poster,
    size,
    ratings,
    onPress,
  }
)=>{
    const navigation=useNavigation();

    // console.log(poster)
    return(
        <SafeAreaView>
         
      <TouchableOpacity onPress={onPress}>
        <View style={[{flexDirection :'row',padding:5},styles.shadow]}>
          <ImageBackground  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} source={{
          uri: poster}} imageStyle={{borderRadius:5}}>
            {/* <LinearGradient 
                colors={['transparent','black']} 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={{flex:1}}
                  > */}
            <TouchableOpacity style={{position: "absolute", width:30,
            height: 30,backgroundColor:'white',right:10,top:10,
            borderRadius:20}}>
           <LinearGradient colors={['#f99f00', '#db3069']}  start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}} style={{position: "absolute", width:30,
            height: 30,justifyContent:'center',
            borderRadius:20}}>
           <Text style={{textAlign:'center',color:'white',fontSize: 17}}>{ratings}</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* </LinearGradient> */}
          </ImageBackground>
          </View>
          <View>
          <Text style={styles.title}>{title}</Text>

          </View>
       </TouchableOpacity>
        </SafeAreaView>
    )

}
const styles=StyleSheet.create({

    imageStyle :{
        width :60,
        height: 220,
        padding :70,
        marginLeft :18,
        borderRadius :5,
        backgroundColor:'grey',
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: -8, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
      title:{
        left:20,
        width:140,
        fontSize:15,
        padding:10,
        color:'black',
        textTransform: 'uppercase',
        textAlign:'center'
        
  
      }
  
    
})
export default PopularComponent

