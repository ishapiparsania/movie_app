import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const ProfileComponent=(
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
          <Image  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} 
          source={{uri: poster}}
          />
          <View>
          <Text style={{paddingBottom:5}}>{title}</Text>

          </View>
          </View>
        
       </TouchableOpacity>
        </SafeAreaView>
    )

}
const styles=StyleSheet.create({

    imageStyle :{
        width :85,
        height: 130,
        marginLeft :10,
        borderRadius :5,
        backgroundColor:'grey',
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
    
  
    
})
export default ProfileComponent