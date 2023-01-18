import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const CastComponent=(
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
          <View style={styles.shadow}>
          {poster!=null?
          <Image  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} 
          source={{uri: poster}}
          />:
          <Image style={styles.imageStyle} 
          source={require('../assets/cast.png')}
          />
        }
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
        width :90,
        height: 100,
        marginLeft :20,
        borderRadius :10,
        backgroundColor:'grey',
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
    title:{
      left:10,
      width:100,
      fontSize:12,
      padding:8,
      color:'black'
      

    },
    
    imageStyle1:{
      height:80,
      width:80,
    }
  
    
})
export default CastComponent