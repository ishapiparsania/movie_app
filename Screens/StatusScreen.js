import React,{useEffect,useState} from 'react';

// import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList,Button,Platform,Alert,KeyboardAvoidingView, KeyboardAvoidingViewBase,Image} from 'react-native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity,Image, FlatList
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { hp, wp } from '../components/Dimensons';
import { addStatus } from '../actions/Action/StatusAction';
import { useSelector,useDispatch } from 'react-redux';




const StatusScreen = ({route}) => {
  const dispatch = useDispatch();
  const dataNew = useSelector(state => state);
  const data = dataNew.getStatusReducer.status
  const navigation=useNavigation();
  const[profimg,setprofimg]=useState("https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png");
  const movie_info = route.params
  const [Status,setstatus]= useState('');
  const[name,setname]=useState("")
  const [commentarray,setcommentarray]=useState([])



    const taskInputHandler = (enteredText) => 
    {
        setstatus(enteredText);
    }

    const addStatushandler=()=>{
      taskInputHandler('');
      dispatch(addStatus({
        status:Status,
        id:movie_info.id,
        banner:movie_info.banner,
        type:movie_info.type
      }));

  }

  useEffect(()=>{
    if(data){

      const array=[]
      const isMovieStatus=data.forEach(element=>{
        if(element.id == movie_info.id){
          array.push(element)   
        }
      })
      setcommentarray(array)
    }

    AsyncStorage.getItem("UserData").then(valuen => {
      // console.log(valuen)
        if (valuen !== null ) {
          try{
          var value= JSON.parse(valuen);
            if(value.isLoggedin === '1'){
            setname(value.id)
            setprofimg(value.image)

            }
          }catch(error){
          console.log(error)
          }
        }
      })
  
  },[Status])

  

  
  return (

    <SafeAreaView>
      
      <View style={{padding:5,flexDirection:'row'}}>
      <Text style={{fontSize:35,top:hp('2%'),width:wp('67%')}}>{movie_info.title}</Text>
      
      <Image  style={[styles.imageStyle,styles.shadowBottonContainerStyle]} source={{
          uri: movie_info.banner}} />
          </View>
          <View style={{paddingTop:12}}>
          <FlatList
            numColumns={3}
            key={3}
            showsHorizontalScrollIndicator={false}
            data={movie_info.gen}
            renderItem={({ item }) => (
            <View>
            <Text style={{fontWeight:'300',padding:3,fontSize:16,fontWeight:'400',color:"#696969",fontFamily: 'Helvetica-Light'}}>{item.genre}</Text>
             </View>
            )}
            
            keyExtractor={item => item.id}
            />
             <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'red',fontSize:15,top:2,marginLeft:7}} >{movie_info.rating}</Text> 

            <View style={{flexDirection:'row',marginLeft:30}}>

                {[...Array(Math.round(movie_info.rating/2))].map((elementInArray, index) =>

                (<Image key={index} source={require('../assets/fillstar.png')}/>
                ))}
                {Math.round(movie_info.rating/2)<=5
                ?
                [...Array(5-Math.round(movie_info.rating/2))].map((elementInArray, index) => (
                <Image key={index} source={require('../assets/blankstar.png')}/>
                )
                ):
                <View>
                </View>}
                </View>
            
            
                </View>
           
            </View>
            
          
          
          <View style={{top:hp('10%')}}>
          
          <FlatList 
            data={commentarray}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=>(
            
            <View style={styles.CommentBox}>
              <View style={{flexDirection:'row',justifyContent:'flex-start',}}>
              <TouchableOpacity>
              <View style={{alignSelf:'center'}}>
            <Image source={{uri :profimg}} style={styles.profileImage} />
            </View>
              </TouchableOpacity>
                  <Text style={{fontSize:20,marginLeft:10,textTransform:'uppercase',top:4}}>{name}</Text>
                  </View>
                <View style={styles.listItem}>
                  <Text style={{fontSize:15,color:"#696969",fontFamily: 'Helvetica-Light',fontWeight:'400'}}>
                    {item.status}
                  </Text>
                </View>
                </View>)

           
            }/>
          </View>



          <View style={{ flexDirection: 'row', marginHorizontal: 20 ,top:hp('90%'),position:'absolute',alignItems: 'center',justifyContent:'flex-end',width:wp('100%')}}>
                <TextInput
                    placeholder="Say Something"
                    onChangeText={taskInputHandler}
                    value={Status}
                    style={{ borderWidth: 1, borderColor: 'white', backgroundColor: 'white', height: 45, flex: 1 }}
                />
                
                <TouchableOpacity onPress={addStatushandler}>
                    <View 
                    // style={{ height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',right:20 }}
                    >
                      <Text style={{color:'red',right:50}}>Send</Text> 
                    </View>
                </TouchableOpacity>
            </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle :{
    width :60,
    height: 150,
    padding :55,
    left:wp('70%'),
    top:10,
    borderRadius :5,
    backgroundColor:'grey',
    position:'absolute'
},
listItem:{
  backgroundColor:'white',
  paddingLeft:wp('15%'),
  paddingBottom:10
  },
  listItem1:{
    backgroundColor:'white',
    padding:10,
    paddingLeft:15,
    borderColor:'black',
    borderWidth:2,
    marginVertical:10,
    borderRadius:15,
    marginRight:15,
    marginLeft:15,
    },

  CommentBox:{
    backgroundColor:'white',
    paddingTop:4,
    marginVertical:10

  },
  profileImage:{
    // top:20,
    width:50,
    height:50,
    borderRadius:75,
  },
  ImageStyle:{
    width:25,
    height:25,
    
},
  
});

export default StatusScreen;