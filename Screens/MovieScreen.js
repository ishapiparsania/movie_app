import React,{useEffect,useState} from 'react';

// import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList,Button,Platform,Alert,KeyboardAvoidingView, KeyboardAvoidingViewBase,Image} from 'react-native'
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
Button,
TouchableOpacity,
FlatList,Image
} from 'react-native';
import { Appbar } from 'react-native-paper';
// import {Spinner} from 'react-bootstrap'

import { useNavigation } from '@react-navigation/native'


import MovieComponent2 from '../components/MovieComponent2'
import MovieComponent from '../components/MovieComponent';
import { useSelector,useDispatch } from 'react-redux';
import  {getUpcomingMovies } from "../actions/Action/getUpcomingMoviesAction";
import  {getPopularMovies } from "../actions/Action/getUpcomingMoviesAction";
import { getCastDetails } from "../actions/Action/getCastAction";
import PopularComponent from '../components/PopularComponent';
import TopComponent from '../components/topComponent';
import { Genredata } from '../actions/Action/getGenreMovie';
import axios from "axios";

const MovieScreen = () => {
  const navigation=useNavigation();
  const Genres = ['a','b','c','d','e','f']
  const dispatch = useDispatch();
  const dataNew = useSelector(state => state);
  const [data, setData] = useState();
  const GetProfileData= dataNew.getProfileLikeReducer.getLike;
  const Genreinfo= dataNew.getGenreMovieReducer.getGenreData
  const [array1,setarray]=useState([])
  
  const NowMovieData = dataNew.getUpcomingMoviesReducer.getUpcomingMovies;
  const checkedagain1 = dataNew.getUpcomingMoviesReducer.getPopularMovies;
  const popularslice = dataNew.getUpcomingMoviesReducer.getPopularMovies.slice(0,16);
  // console.log(checkedagain1)
  // console.log(popaularsplice)
  const searchhandler=()=>{
    navigation.navigate("SearchMovie",{search:'movie'})
  }

  const Categoryhandler=()=>{
    navigation.navigate("Category")
  }
  
  
    useEffect(() => {
      dispatch(getUpcomingMovies());
      dispatch(getPopularMovies());
      let res = Genreinfo.reduce((acc,i) => acc = acc > i.count ? acc : i.count,0)
            const getMaxObject = Genreinfo.find(eop => (
                eop.count === res
            ))
            if(getMaxObject){
                const  movieId1= getMaxObject.movieId
                const moviApiurl='http://47.254.174.28/movie/id/'+movieId1+'/'
                            fetch(moviApiurl)
                           .then((responseNew) => responseNew.json())
                           .then((jsonN) => {
                            //  console.log(jsonN.results)
                            //  console.log(jsonN.results.gen.length)
                             if(jsonN){
                              const array=[];
                               if(jsonN.results){
                                 for(var i=0;i<jsonN.results.gen.length;i++){
                                   const genreApiurl = 'http://47.254.174.28/movie/byGen/'+jsonN.results.gen[i].genre+'/?page=2&page_size=4'
                                   fetch(genreApiurl)
                                    .then((responseNew1) => responseNew1.json())
                                    .then((json) => {
                                      // console.log("here it is")
                                      const resultArray = json.results;
                                      resultArray.forEach(element => {
                                        const moviApiurlFinal='http://47.254.174.28/movie/id/'+element.imdb_id+'/'
                                        fetch(moviApiurlFinal)
                                        .then((finalResp) => finalResp.json())
                                        .then((finalJsonN) => {
                                          if(finalJsonN){
                                            let obj = {
                                              id : finalJsonN.results.imdb_id,
                                              image : finalJsonN.results.banner
                                            }
                                            array.push(obj)
                                          }
                                        });
                                        
                                      });
                                      // console.log("finaljson")
                                      //  console.log(array)
                                       setarray(array)
                                    })
                                    .catch((error) => console.error(error))

                                 }
                                //  console.log("final json second")
                                //  console.log(array)
                               }else{

                               }
                             }
                         })
                           .catch((error) => console.error(error))

            }else{

            }
    },[Genreinfo])
    


    // console.log(dataNew)
    const renderFooter = (data) => {
      return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('NowMoreList',{Flag:data})}
            style={[{padding:5},styles.shadow]}
          >
              <View   style={{width :140,
                  height: 220,
                  alignItems:"center",
                  justifyContent: 'center',
                  marginLeft :20,
                  borderRadius :5,
                  backgroundColor:'rgba(255, 204, 39, 0.8)'
              
              }}>
            <Text style={{fontSize:25,color:'white'}}>MORE</Text>
            </View>
          </TouchableOpacity>
      
      );
    };  
  return (

  <SafeAreaView style={{backgroundColor : 'white'}} >
  <Appbar.Header  style={{backgroundColor:'transparent'}}>
   <Appbar.Content title="MOVIES" titleStyle={{fontSize: 25,right:140}}  />
   {/* <TouchableOpacity onPress={()=>Categoryhandler()}>
   <Text style={{right:90,fontSize:18}}>Categories</Text>

   </TouchableOpacity> */}
   <TouchableOpacity onPress={()=>searchhandler()}>
   <Image  style={styles.ImageStyle} source={require('../assets/search.png')} />

   </TouchableOpacity>
    </Appbar.Header>
  <ScrollView>

 <FlatList 
 horizontal={true}
 data={array1}
 showsHorizontalScrollIndicator={false}
 keyExtractor={(item, index) => String(index)}
renderItem={({item})=> <TopComponent
poster={item.image}
size={0.6} 
title={item.id}
onPress={() => navigation.navigate("DetailScreen", { movieId: item.id})}

 
 />}
 

 
 />
 <View>
 <Text style={styles.text}>Now</Text>
 <FlatList 
 horizontal={true}
 data={NowMovieData.slice(0,5)}
 showsHorizontalScrollIndicator={false}
keyExtractor={(item, index) => String(index)}
renderItem={({item})=><MovieComponent
title={item.title}
poster={item.banner}
size={0.6} 

onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id})}

 />}

 ListFooterComponent={renderFooter("nowflag")}
 />
</View>
 <Text style={styles.text1}>Popular</Text>
 <ScrollView
 horizontal
 showsVerticalScrollIndicator={false}
 showsHorizontalScrollIndicator={false}
>


<FlatList 
numColumns={5} 
showsHorizontalScrollIndicator={false} 
scrollEnabled={false}
data={dataNew.getUpcomingMoviesReducer.getPopularMovies.slice(0,10)}
renderItem={({item,index})=>(index!=9? 
<PopularComponent
title={item.title}
poster={item.banner}size={0.6}
ratings={item.rating}
onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id})}/>
:
<TouchableOpacity
onPress={()=>navigation.navigate('NowMoreList',{Flag:'Popularflag'})}
style={[{padding:5},styles.shadow]}
>
  <View   style={{width :140,
      height: 220,
      alignItems:"center",
      justifyContent: 'center',
      marginLeft :20,
      borderRadius :5,
      backgroundColor:'rgba(255, 204, 39, 0.8)'
  
  }}>
<Text style={{fontSize:25,color:'white'}}>MORE</Text>
</View>
</TouchableOpacity>
)}
/>


 
 {/* <FlatList 
data={popularslice}
scrollEnabled={false}
numColumns={Math.ceil(popularslice.length / 2)}
key={Math.ceil(popularslice.length / 2)}

showsHorizontalScrollIndicator={false}
 keyExtractor={(item, index) => String(index)}
 renderItem={({item})=>
 <PopularComponent
poster={item.banner} 
size={0.6}
ratings={item.rating}
onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id})}/>}
ListFooterComponent={renderFooter("Popularflag")}
/> */}

</ScrollView>
 </ScrollView>
 
 </SafeAreaView>
);
};

const styles = StyleSheet.create({
    
      text :{
        color :'grey',
        padding:10,
        fontSize: 20,
        marginLeft: 10,
        left:10
    },
    text1 :{
      color :'grey',
      fontSize: 20,
      marginLeft: 10,
      padding:10,
      left:10
  },
  ImageStyle:{
    width:25,
    height:25,
    right:20
},
sectionTitle: {
  fontSize: 20,
  fontWeight: '600',
  color: 'white',
  
},
shadow: {
  shadowColor: 'grey',
  shadowOffset: {width: -8, height: 10},
  shadowRadius:3,
  shadowOpacity : 0.8,
  elevation :28
},



});

export default MovieScreen;
