import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const MovieComponent=(
  {
    title,
    poster,
    size,
    onPress,
    ratings

  }
)=>{
    const navigation=useNavigation();

    // console.log(poster)
    return(
        <SafeAreaView>
         
      <TouchableOpacity onPress={onPress}>
        <View style={[{flexDirection :'row',padding:5},styles.shadow]}>
          <Image  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} source={{
          uri: poster}} />
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
export default MovieComponent