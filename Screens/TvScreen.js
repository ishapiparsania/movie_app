import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { Appbar } from 'react-native-paper';
import {LogBox} from 'react-native';

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
  TouchableOpacity,Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { getNowTv } from '../actions/Action/getUpcomingMoviesAction';
import { getPopularTv } from '../actions/Action/getUpcomingMoviesAction';

import MovieComponent from '../components/MovieComponent';
import TvComponent from '../components/TvComponent';


export default TVScreen = () => {
    const navigation=useNavigation();
    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
    const [moviData, setMoviData] = useState([]);
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state);
    const NowTvData = dataNew.getUpcomingMoviesReducer.getNowTv;
    const PopularTvData = dataNew.getUpcomingMoviesReducer.getPopularTv;
    const emptyData=[];
    const searchhandler=()=>{
    navigation.navigate("SearchMovie",{search:'series'})
    }
  
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    LogBox.ignoreAllLogs();
    dispatch(getNowTv())
    dispatch(getPopularTv()) 
  },[])

const renderFooter = (data) => {
  // console.log(data)
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
const renderFooter1 = (data) => {
  // console.log(data)
  return (
      <TouchableOpacity
        onPress={()=>navigation.navigate('NowMoreList',{Flag:data})}
        style={[{padding:5},styles.shadow]}
      >
          <View   style={{
            alignItems:"center",
           justifyContent: 'center',
           borderRadius :10,
           backgroundColor:'rgba(255, 204, 39, 0.8)',
           width :340,
          height: 180,
          padding :70,
          marginLeft :20,
          marginRight:20,
          borderRadius :10,
          }}>
        <Text style={styles.sectionTitle}>MORE</Text>
        </View>
      </TouchableOpacity>
  
  );
};

const data1 = () => {
  return(
    <SafeAreaView style={{backgroundColor : 'white',flex:1}} >

    <Appbar.Header  style={{backgroundColor:'transparent'}}>
   <Appbar.Content title="TV" titleStyle={{fontSize: 25,right:160}}  />
   <TouchableOpacity onPress={()=>searchhandler()}>
   {/* <Text>Search</Text> */}
   <Image  style={styles.ImageStyle1} source={require('../assets/search.png')} />

   </TouchableOpacity>
    </Appbar.Header>
  
    {/* <ScrollView > */}
 <Text style={styles.text}>Now</Text>
 <View>
 <FlatList 
 horizontal={true}
 data={NowTvData.slice(0,5)}
 showsHorizontalScrollIndicator={false}
 keyExtractor={(item, index) => String(index)}
  renderItem={({item})=><MovieComponent
 title={item.title}
poster={item.banner}
size={0.6} 
onPress={() => navigation.navigate("DetailScreen", { seriesId: item.imdb_id })}
/>}
 ListFooterComponent={renderFooter("nowTvflag")}
 ListFooterComponentStyle={{
  
  flexDirection:'row',
}}

 />
</View>
<Text style={styles.text1}>Popular</Text>

 
  <FlatList
              
        data={PopularTvData.slice(0,6)}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item})=><TvComponent
        title={item.title}
        poster={item.banner}
        size={0.6} 
        ratings={item.rating}
        onPress={() => navigation.navigate("DetailScreen", { seriesId: item.imdb_id })}

        />}
ListFooterComponent={renderFooter1("PopularTvflag")}
ListFooterComponentStyle={{
  
  // width :200,
  flexDirection:'row',
}}

      />
 {/* </ScrollView> */}
 </SafeAreaView>

  )


}

  
return (   
  <View style={{flex:1,}}>
        <FlatList
        data={emptyData}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={data1()}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle:{
          width :40,
          height: 209,
          padding:70,
          marginLeft:20,
          borderRadius:10
          
  
      },

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
      marginLeft: 18,
      left:10,
      paddingBottom:5
  },
  
    ImageStyle1:{
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
