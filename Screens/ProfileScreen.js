import React,{useEffect,useState} from 'react';
 import Icon from 'react-native-vector-icons/Ionicons';

// import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList,Button,Platform,Alert,KeyboardAvoidingView, KeyboardAvoidingViewBase,Image} from 'react-native'
import { Appbar } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,Image,
  TouchableHighlight
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { AddLike } from "../actions/Action/likeAction";
import ProfileComponent from '../components/ProfileComponent';
import { AddProfileImg } from '../actions/Action/likeAction';


export default ProfileScreen = () => {
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state);
    // console.log(dataNew)
    const [likeflag , setLikeFlag] = useState(true);
    const [favflag , setfavFlag] = useState(false);
    const [comflag , setcomFlag] = useState(false);

    const[name,setname]=useState("");
    const[profimg,setprofimg]=useState("https://unloc.online/wp-content/uploads/2020/04/283-2833820_user-icon-orange-png.png");
    const [image,setImage]=useState("https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png");
    const GetProfileData= dataNew.getProfileLikeReducer.getLike;
    const GetFavouriteData= dataNew.getFavouriteReducer.Favourite;
    const [active, setActive] = useState(true);
    const [activefav, setActivefav] = useState(false);
    const [activecom, setActivecom] = useState(false);
    const GetStatus=dataNew.getStatusReducer.status
    const ImageData = dataNew.ImageReducer.profileImg
    // console.log(ImageData)

    const filterstatus = [];

    const uniqueArr = [...new Map(GetStatus.map(item =>
      [item['id'], item])).values()];
    
    // console.log(uniqueArr);

  useEffect(()=>{
    // setprofimg(ImageData)
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
  },[]);
  console.log("hiii")

  console.log(profimg)

    const eventhandler = (imdb_id,type) => {
      if(type=="movie") {
         navigation.navigate("DetailScreen", { movieId: imdb_id })

      }else{
         navigation.navigate("DetailScreen", { seriesId: imdb_id })

      }

    }


    const takePhotoLibrary = async()=>{
      ImagePicker.openPicker({
        width: 300,height: 400,cropping: true
      }).then(image => {
        // console.log(image.path);
         AsyncStorage.getItem("UserDatadb").then(value => {
          //  console.log("image here")
          //  console.log(value)
              try{
                  var updatedData = JSON.parse(value)
                  var userD =  updatedData.find(key =>  key.id === name )
                  if (userD) {
                    updatedData.findIndex(key =>  key.id === name )
                      var user= {
                          email: userD.email,
                          password: userD.password,
                          token : userD.token,
                          id:userD.id,
                          isLoggedin:'1',
                          image:image.path
                      }
                      AsyncStorage.setItem('UserData',JSON.stringify(user));
                      // setname(value.id)
                      setprofimg(image.path)
                    
                  }
                  else{  
                  }
              }catch(error){
                  console.log(error)
              } 
          })
        // dispatch(AddProfileImg(image.path))
        // setprofimg(ImageData)

        // setImage(ImageData)
      });
      }
    
    const favouritehandler=()=>{
      setActivefav(true)
      setActive(false)
      setActivecom(false)
      setLikeFlag(false)
      setfavFlag(true)
      setcomFlag(false)

}

const commenthandler=()=>{
  setActivefav(false)
  setActive(false)
  setActivecom(true)
  setLikeFlag(false)
  setfavFlag(false)
  setcomFlag(true)
}

const likehandler=()=>{
  setActive(true)
  setActivefav(false)
  setActivecom(false)
  setLikeFlag(true)
  setfavFlag(false)
  setcomFlag(false)
}

  
  return (
   
    <SafeAreaView>
    {/* <LinearGradient colors={['rgba(0, 143, 255, 1)','transparent']} style={styles.linearGradient}> */}
   <Appbar.Header  style={{backgroundColor:'transparent'}}>
   <Appbar.Content title="Profile" titleStyle={{fontSize: 25,right:150}}  />
   <TouchableOpacity onPress={()=>navigation.navigate("Settings")}>
   <Image  style={styles.ImageStyle1} source={require('../assets/set2.png')} />

   </TouchableOpacity>
    </Appbar.Header>
     <TouchableOpacity onPress={takePhotoLibrary}>
     <View style={{alignSelf:'center'}}>
        {/* <Image source={{uri :image}} style={styles.profileImage} /> */}
        <Image source={{uri:profimg}} style={styles.profileImage} />

    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.infoContainer} >
        <Text style={[styles.text,{fontWeight:'200',fontSize:25,top: 10,color:'black',fontWeight:'300'}]}>{name}</Text>
    </View>
    </TouchableOpacity>
   
   
    <View style={styles.statsContainer}>
      <View style={styles.statsBox}>
        <TouchableOpacity style={{...styles.imageStyle,backgroundColor:active?'#a9a9a9':'white'}} onPress={likehandler}>
        <Text style={[styles.text,{fontSize:35,color:'#db3069'}]}>{GetProfileData.length}</Text>
        <Text style={[styles.text]}>Like</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsBox} >
      <TouchableOpacity style={{...styles.imageStyle,backgroundColor:activefav?'#a9a9a9':'white'}} onPress={favouritehandler}>
        <Text style={[styles.text,{fontSize:35,color:'#db3069'}]}>{GetFavouriteData.length}</Text>
        <Text style={[styles.text,styles.subText]}>Favourites</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsBox}>
      <TouchableOpacity style={{...styles.imageStyle,backgroundColor:activecom?'#a9a9a9':'white'}} onPress={commenthandler}>
        <Text style={[styles.text,{fontSize:35,color:'#db3069'}]}>{GetStatus.length}</Text>
        <Text style={[styles.text,styles.subText]}>Comments</Text>
        </TouchableOpacity>
      </View>

      
    </View>
    {/* </LinearGradient> */}
   
    
    <View style={{paddingTop:40}}>
    {
      likeflag ? 
      <FlatList
              
              data={GetProfileData}
              numColumns={4}
              key={4}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item})=><ProfileComponent
              poster={item.img}
              size={0.6} 
              onPress={()=>eventhandler(item.imdb_id,item.type)}
              />
            }

      
      
            />
      : null}

      {
        favflag?
        <FlatList
              
        data={GetFavouriteData}
        numColumns={4}
        key={4}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item})=><ProfileComponent
        poster={item.img}
        size={0.6} 
        onPress={()=>eventhandler(item.imdb_id,item.type)}
        />
      }
      />:
      null
      }
       

       {
        comflag?
        <FlatList
        data={uniqueArr}
        numColumns={4}
        key={4}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item})=><ProfileComponent
        poster={item.banner}
        size={0.6}
        onPress={()=>eventhandler(item.id,item.type)}
        />
      }
      />:
      null
      }
    
    
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    // top:-50

},
  imageStyle :{
    width :110,
    height: 80,
    borderRadius :5,
    backgroundColor:'white',
    // marginLeft:10,
    // marginRight:10
    
},
  ImageStyle:{
          width :40,
          height: 209,
          padding:70,
          marginLeft:20,
          borderRadius:10
      },
      profileImage:{
        top:20,
        width:120,
        height:120,
        borderRadius:75,
      },
     infoContainer:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:16
      },
      statsContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:32,
        // paddingBottom:30
        
      },
      statsBox :{
        alignItems:'center',
        flex:1,

      },
     text:{ 
       fontFamily:"HelveticaNeue",
      //  color:'#52575D',
       textAlign:'center',
       top:5,
       fontSize:18
       

     },
     ImageStyle1:{
      width:30,
      height:30,
      right:15
  }
  });
