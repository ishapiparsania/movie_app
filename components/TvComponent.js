import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView,ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient'


const TvComponent=({
    title,
    poster,
    size,
    onPress,
    ratings
  })=>{
    const navigation=useNavigation();
    // console.log(ratings)
    return(
        <SafeAreaView >
           <View style={[{flexDirection :'row', padding:18,paddingBottom:25},styles.shadow]}>
           <TouchableOpacity 
           style={ styles.imageStyle}
           onPress={onPress} 
           >
           <ImageBackground style={ styles.imageStyle} imageStyle={{borderRadius:5}} 
           source={{uri: poster}}>
            <TouchableOpacity style={{position: "absolute", width:30,
            height: 30,backgroundColor:'white',right:10,top:10,
            borderRadius:20}}>
           <LinearGradient colors={['#f99f00', '#db3069']}  start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}} style={{position: "absolute", width:30,
            height: 30,justifyContent:'center',
            borderRadius:20}}>
           <Text style={{textAlign:'center',color:'white',fontSize: 17}}>{ratings}</Text>
              </LinearGradient>
            </TouchableOpacity>

          </ImageBackground>
          
          <Text style={styles.title}>{title}</Text>
         
           </TouchableOpacity>
           
           </View>
        </SafeAreaView>
    )

}
const styles=StyleSheet.create({

    container :{
       width : 280,
       padding :20,
       flexDirection : 'row'

    },
    imageStyle :{
        width :340,
        height: 160,
        marginLeft :5,
        borderRadius :5,
        
        // backgroundColor:'rgba(255, 204, 39, 0.8)'
       
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: -9, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
      title:{
        textTransform:'uppercase',
        padding: 12,
        color:'black'
  
  
      }
    
})
export default TvComponent