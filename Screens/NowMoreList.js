import React,{useEffect, useState} from "react";
import { View, Text,TouchableOpacity, StyleSheet, Image, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from 'react-redux';
import MovieComponent from '../components/MovieComponent';
import  {getUpcomingMovies } from "../actions/Action/getUpcomingMoviesAction";
import TvComponent from "../components/TvComponent";
import { wp,hp } from "../components/Dimensons";
import PopularComponent from "../components/PopularComponent";
// import MoreComponent from "../components/MoreComponent";




const NowMoreList=({route}
)=>{
   const data= route.params
   console.log(data.Flag)
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state);
    
    const [checkedagain, setcheckedagain] = useState([]);
    const [checkedagain2, setcheckedagain2] = useState([]);

    const [checkedagain1, setcheckedagain1] = useState([]);

    
    useEffect(()=>{
      if(data.Flag=='nowflag'){
        setcheckedagain(dataNew.getUpcomingMoviesReducer.getUpcomingMovies);
    }
    else if(data.Flag=='Popularflag') {
       setcheckedagain2(dataNew.getUpcomingMoviesReducer.getPopularMovies);

    }
    else if(data.Flag=='nowTvflag'){
      setcheckedagain(dataNew.getUpcomingMoviesReducer.getNowTv);

      
    }
    else if(data.Flag=='PopularTvflag'){
      setcheckedagain1(dataNew.getUpcomingMoviesReducer.getPopularTv);

    }

    })
    
    return(
        <SafeAreaView>
          {   
              (data.Flag=='nowflag'|| data.Flag=='nowTvflag') ? <Text style={styles.text}>Now List</Text> :<Text style={styles.text}>Popular List</Text> 
          }
         
         {/* <Text style={styles.text}>Now List</Text> */}
            <FlatList 
            columnWrapperStyle={{justifyContent:'space-around',padding:15,marginRight:20}}
            numColumns={2}
            key={2}
            data={checkedagain}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=><MovieComponent
            title={item.title}
            poster={item.banner}
            ratings={item.rating}

            size={0.6}
            onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id })} 
            />}
          
            />

            <FlatList 
            columnWrapperStyle={{justifyContent:'space-around',padding:15,marginRight:20}}
            numColumns={2}
            key={2}
            data={checkedagain2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=><PopularComponent
            title={item.title}
            poster={item.banner}
            ratings={item.rating}

            size={0.6}
            onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id })} 
            />}
          
            />  
            {/* {   
              (data.Flag=='PoplarTvflag') ? <Text style={styles.text}>Now List</Text> :null
          } */}

           <FlatList
            
              
              data={checkedagain1}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item})=><TvComponent
              title={item.title}
              poster={item.banner}
              ratings={item.rating}
              size={0.6} 
              onPress={() => navigation.navigate("DetailScreen", { seriesId: item.imdb_id })}
      
              />
            }
      
            />
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    text :{
        color :'grey',
        padding : 10,
        fontSize: 20,
        marginLeft: 18
    },

    container :{
       width : 280,
       padding :20,
       flexDirection : 'row'

    },
    imageStyle :{
        width :60,
        height: 220,
        padding :70,
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
      left:30,
      width: 130,
      textTransform:'uppercase'


    }
    // title:{
    //   left:20,
    //   width:140,
    //   fontSize:15,
    //   padding:10,
    //   color:'black',
    //   textTransform: 'uppercase',
    //   textAlign:'center'
      

    // }
  
    
})
export default NowMoreList