import React,{useEffect} from 'react';
import { View, Text,TouchableOpacity, StyleSheet,Image } from 'react-native';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen1 from './Screen1';
import Swiper from 'react-native-swiper';
import { useNavigation } from "@react-navigation/native";
import { wp ,hp } from "../components/Dimensons"; 


import AsyncStorage from '@react-native-async-storage/async-storage';


    const Onboard=()=>{
        const navigation=useNavigation();

    return(
       
           <Swiper style={styles.wrapper} 
           showsPagination={true}
           activeDot={<Image style={{height:35,width:35,marginBottom:'60%',margin:5}}
           source={require('../assets/movie_trailer.png')}></Image>}
           dot={<Image style={{height:25,width:25,marginBottom:'60%',margin:5}} source={require('../assets/movie_trailer.png')}></Image>} 
           paginationStyle=
           {{top:hp('60%')}}
           >
              
               <Screen1/>
               <Screen2/>
               <Screen3 />
           </Swiper>
        // </View>
        )
        }
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems : 'center'
    },
  
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  ImageStyle1:{
      width:30,
      height:30,
      // right:20
  }

})

export default Onboard