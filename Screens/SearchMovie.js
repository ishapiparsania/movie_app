import React, { useEffect, useState } from 'react';
import {View,Text, StyleSheet,TextInput,TouchableOpacity,FlatList,Image} from 'react-native'
import { Appbar } from 'react-native-paper';
import RenderIf from "../components/RenderIf";
import Icon from 'react-native-vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import MovieComponent from '../components/MovieComponent';
import { useNavigation } from '@react-navigation/native'



const SearchMovie=({route})=>{

    const navigation=useNavigation();
    // console.log(route.params)
    const [status,setStatus]=useState([]);
    const [input, setInput] = useState("");
    
    async function fetchData(text) {
        if(route.params.search=="movie"){
            var result = await fetch(`http://47.254.174.28/movie/imdb_id/byTitle/${text}/?page=1&page_size=5`);
            const json = await result.json();
            // console.log(json)
            // console.log(json.results.length)
            if (json) {
                const array = [];
                for(var i=0;i<json.results.length;i++){
                         
                          const moviApiurl='http://47.254.174.28/movie/id/'+json.results[i].imdb_id+'/'
                        //   console.log(moviApiurl)
                          await fetch(moviApiurl)
                          .then((responseNew) => responseNew.json())
                          .then((jsonN) => {
                            
                            array.push(jsonN.results)
                            
                        })
                          .catch((error) => console.error(error))
                          
                }
                setStatus(array)
                // console.log(array)
            } else {
                console.log('Unable to fetch!');
            }

        }
        else{
            var result = await fetch(`http://47.254.174.28/series/idbyTitle/${text}/?page=1&page_size=5`);
            const json = await result.json();
            // console.log(json)
            // console.log(json.results.length)
            if (json) {
                const array = [];
                for(var i=0;i<json.results.length;i++){
                         
                          const moviApiurl='http://47.254.174.28/series/id/'+json.results[i].imdb_id+'/'
                        //   console.log(moviApiurl)
                          await fetch(moviApiurl)
                          .then((responseNew) => responseNew.json())
                          .then((jsonN) => {
                            
                            array.push(jsonN.results)
                            
                        })
                          .catch((error) => console.error(error))
                          
                }
                setStatus(array)
                // console.log(array)
            } else {
                console.log('Unable to fetch!');
            }
        }
        
            // const result = await fetch(`http://47.254.174.28/movie/imdb_id/byTitle/${text}/?page=1&page_size=5`);
            
	}
    
    return(
        <View>
        <Appbar.Header  style={{backgroundColor:'transparent'}}>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
        <Image  style={styles.ImageStyle1} source={require('../assets/back.png')} />

       </TouchableOpacity>
            
       <Appbar.Content   />
       
       
            <TextInput style={styles.input1}
            placeholder="Search here"
            placeholderTextColor={"black"}
            onChangeText={(text) => {
                setInput(text);
                fetchData(text);
            }}
            value={input}
           
            />
        
            
        </Appbar.Header>


            <FlatList 
            columnWrapperStyle={{justifyContent:'space-around',padding:15,marginRight:20}}
            numColumns={2}
            key={2}
            data={status}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=><MovieComponent
            title={item.title}
            poster={item.banner}
            size={0.6} 
            onPress={() => navigation.navigate("DetailScreen", { movieId: item.imdb_id })}

    />}
    // ListFooterComponent={renderFooter}
    />

       
        </View>

    )
}

const styles=StyleSheet.create({
    input1:{

        width:'70%',
        right:70,
        backgroundColor:'transparent',
        height:20,
        fontSize:20,
        color:'black',

        
        },
        ImageStyle1:{
            width:35,
            height:35,
            // right:20
        }
      
})
export default SearchMovie
