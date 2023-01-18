
import React from 'react'
import {View,Text, StyleSheet, TouchableOpacity,SafeAreaView} from 'react-native'
import { Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux';
import { ClearCache } from '../actions/Action/likeAction';

const Settings=()=>{
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state);
    // console.log(dataNew)
    const cache= dataNew.getProfileLikeReducer.getLike;

    const cacheHandler = ()=>{
        dispatch(ClearCache())
    }

    const logOutHandler=async()=>{
        const input=await AsyncStorage.getItem('UserData');

        if(input){
            var enter={
                isLoggedin:'0'
            }
            AsyncStorage.setItem('UserData',JSON.stringify(enter));
        }
        // console.log(input)
        navigation.navigate('Login')
    
    }

    return(
        <SafeAreaView style={styles.containerMain}>
             <Text style={styles.text}>Setting</Text>
             <TouchableOpacity style={styles.cache} onPress={cacheHandler}>
            <View style={{flexDirection:'row', 
                            alignItems:'center',
                            justifyContent:'space-around'
                            ,
                            flex:1}}>
             <Text style={[styles.text1,{fontSize:18}]}>Clear cache</Text>
             <Text style={[styles.text1,{marginLeft:80}]}></Text>

             </View>
             </TouchableOpacity>

            <View style={styles.bottomView}>
            <TouchableOpacity style={[styles.input,
                styles.bottomView
                ]} onPress={logOutHandler}>
            <Text style={{fontSize:18,color:'rgba(44, 44, 44, 0.61)'}}>Sign Out</Text>
            </TouchableOpacity>
            </View>
       
        </SafeAreaView>

    )
}

const styles=StyleSheet.create({
    text :{
        color:'grey',
        fontSize:20,
        padding:15
    },
    cache :{
       backgroundColor:'white',
       width:'100%',
       height:65
    },
    text1:{
        color:'grey',
        padding: 15
       
    },
    input:{
        //borderColor:'rgba(186, 186, 186, 0.61)',
        backgroundColor:'rgba(186, 186, 186, 0.61)',
        width:'40%', 
        padding:13,
        borderRadius:30,
        marginVertical:10,
        fontSize:18,
        flexDirection:'row',
        left:40
        },
      
        bottomView: {
            width: '90%',
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', //Here is the trick
            bottom: 20, //Here is the trick
          },
          containerMain: {
            flex: 1,
          },

})
export default Settings
