import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { wp } from "./Dimensons";



const TopComponent=(
  {
    title,
    poster,
    size,
    onPress,
  }
)=>{
    const navigation=useNavigation();
    return(
        <SafeAreaView>
         
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.shadow,{paddingTop:10}]}>
          <Image  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} 
          source={{uri: poster}}
          />
          </View>
        
       </TouchableOpacity>
        </SafeAreaView>
    )

}
const styles=StyleSheet.create({

    imageStyle :{
      width :wp('80%'),
      height: 170,
      padding :70,
      marginLeft :20,
      borderRadius :5,
      backgroundColor:'rgba(255, 204, 39, 0.8)',
      marginBottom:20
       
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: -8, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
    
  
    
})
export default TopComponent