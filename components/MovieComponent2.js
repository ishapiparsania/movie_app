import React from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const MovieComponent2=(
    title,
    poster,
    size,
    onPress,
)=>{
    
    const navigation=useNavigation();
    // console.log(poster)
    return(
        <SafeAreaView>
            <TouchableOpacity >
           <View style={[{flexDirection :'row', padding:5 },styles.shadow]}>
           
           <Image style={[styles.imageStyle]} source={{uri: poster}} />
    
           </View>
           </TouchableOpacity>
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
        width :280,
        height: 160,
        padding :70,
        marginLeft :20,
        borderRadius :10,
        backgroundColor:'rgba(255, 204, 39, 0.8)'
       
    },
    shadow: {
        shadowColor: 'grey',
        shadowOffset: {width: -9, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
      },
  
    
})
export default MovieComponent2