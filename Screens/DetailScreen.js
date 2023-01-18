    import React, { useEffect,useState } from "react";
    import {View,Text, StyleSheet, Image,FlatList,ImageBackground,Card, TouchableOpacity, ScrollView,Alert,Modal,Button,Pressable} from 'react-native'
    import MovieComponent from "../components/MovieComponent";
    import { useSelector,useDispatch } from 'react-redux';
    import LinearGradient from 'react-native-linear-gradient';
    import axios from "axios";
    import { Dimensions } from "react-native";
    import { AddFavourite, AddLike, RemoveFavourite } from "../actions/Action/likeAction";
    import {RemoveLike} from "../actions/Action/likeAction"
    import { useNavigation } from '@react-navigation/native'

    import { getCastDetails } from "../actions/Action/getCastAction";
    import CastComponent from "../components/CastComponent";
    import { Genredata } from "../actions/Action/getGenreMovie";
    import { wp ,hp } from "../components/Dimensons"; 
    import { NavigationContainer } from "@react-navigation/native";

    const DetailScreen=({route})=>{
    const navigation=useNavigation();
    const dispatch = useDispatch();
    const dataNew = useSelector(state => state);
    console.log(dataNew)
    const getLike = dataNew.getProfileLikeReducer.getLike;
    const getFavourite = dataNew.getFavouriteReducer.Favourite;
    const getStatus= dataNew.getStatusReducer.status;

    const [like , setLike] = useState(false);
    const [addfav,setFav]=useState(false)
    const [com,setCom]=useState(false)

    const { movieId } = route.params;
    const { seriesId } = route.params;
    const height=Dimensions.get('window').height
    const width=Dimensions.get('window').width
    const [data, setData] = useState();
    const [genre,setgenreData]=useState()
    const GetCastData = dataNew.getCastReducer.getCast;
    const [modalVisible, setModalVisible] = useState(false);

    const addLikehandler=()=>{
        var type = ''
        if(movieId){
            var type = "movie"

        }
        else{
            var type = "series"
        }
        dispatch(AddLike({
            img:data.results.banner,
            imdb_id:data.results.imdb_id,
            type:type
        }));
        setLike(true)
    }

    const addFavouritehandler=()=>{
        var type = ''
        if(movieId){
            var type = "movie"

        }
        else{
            var type = "series"
        }
        dispatch(AddFavourite({
            img:data.results.banner,
            imdb_id:data.results.imdb_id,
            type:type
        }));
        setFav(true)

    }

    const removehandler = item => {
        let Flag = false;

        getLike.forEach(element => {
            if(element.imdb_id == item.imdb_id){
                Flag = true;
            }
            
        });

        if (Flag) {
        dispatch(RemoveLike(item));
        setLike(false)
        } 
        else {
        alert(`this movie is not in List`);
        }
        };


        const statushandler = ()=>{
            var type = ''
        if(movieId){
            var type = "movie"
        }
        else{
            var type = "series"
        }
            navigation.navigate("StatusScreen",{
                banner:data.results.banner,
                id:data.results.imdb_id,
                title:data.results.title,
                gen:data.results.gen,
                rating:data.results.rating,
                type:type
        
        })
        }

        const removeFavouritehandler = item => {
            let Flag = false;
        
            getFavourite.forEach(element => {
                if(element.imdb_id == item.imdb_id){
                    Flag = true;
                }
                
            });
        
            if (Flag) {
            dispatch(RemoveFavourite(item));
            setFav(false)
            } 
            else {
            alert(`this movie is not in List`);
            }
            };

            // console.log(data.results.gen)

    useEffect(() => {

        if(getLike){
            
            const IsMoviedLiked = getLike.forEach(element => {
                
                if(element.imdb_id == route.params.movieId || element.imdb_id == route.params.seriesId){
                    setLike(true)
                }
            })

            
        }
        if(getFavourite){
            const IsMoviedFav = getFavourite.forEach(element => {
                
                if(element.imdb_id == route.params.movieId || element.imdb_id == route.params.seriesId){
                    setFav(true)
                }
            })
        }

        if(getStatus){
            const IsMoviedCom = getStatus.forEach(element => {
                
                if(element.id == route.params.movieId || element.id == route.params.seriesId){
                    setCom(true)
                }
            })
        }

        dispatch(getCastDetails({
            movieId:movieId,
            seriesId:seriesId
        }));

        dispatch(Genredata({
                movieId:movieId,
                seriesId:seriesId,
                count: 0
            
            }))

        const getdetail = async () => {
            try {
                
                if(movieId){
                    const res = await axios.get(
                        'http://47.254.174.28/movie/id/'+movieId+'/',
                    );
                    // console.log(res)
                    // console.log("in here")
                    setData(res.data);
                    setgenreData(res.data.results.gen)
                    //   console.log(res.data)


                }
                else{
                    const res = await axios.get(
                        'http://47.254.174.28/series/id/'+seriesId+'/',
                    );
                    
            setData(res.data);
            setgenreData(res.data.results.gen)

                }
            } catch (e) {
            
            }
        };
        getdetail();
    },[route,getStatus])


    if(data){
    return(
        <View>
            <ImageBackground source ={{uri :data.results.banner}}
            style={styles.imageStyle} >
                <LinearGradient 
                colors={['transparent','black']} 
                start={{ x: 0, y: 0.4 }}
                end={{ x: 0, y: 0.9 }}
                style={{flex:1}}
                >
            
                
                <Text style={styles.TitleName}>{data.results.title}</Text>
                
                </LinearGradient>
                

            </ImageBackground>

            <View style={styles.shadow}>
                <Image style={styles.imageStyle1} source={{uri :data.results.banner}}/>
                </View>
            <View style={{paddingTop:hp('35%'),marginLeft :wp('40%'),}}>
            <FlatList
            numColumns={3}
            key={3}
            showsHorizontalScrollIndicator={false}
            data={data.results.gen}
            renderItem={({ item }) => (
            <View>
            <Text style={{fontWeight:'300',padding:3,fontSize:14,fontWeight:'400'}}>{item.genre}</Text> 
            </View>
            )}
            
            keyExtractor={item => item.id}
            />
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'red',fontSize:15,top:2}} >{data.results.rating}</Text> 

            <View style={{flexDirection:'row',marginLeft:30}}>

                {[...Array(Math.round(data.results.rating/2))].map((elementInArray, index) =>

                (<Image key={index} style={{height:20,width:20}} source={require('../assets/fillstar.png')}/>
                ))}
                {Math.round(data.results.rating/2)<=5
                ?
                [...Array(5-Math.round(data.results.rating/2))].map((elementInArray, index) => (
                <Image key={index} style={{height:20,width:20}} source={require('../assets/blankstar.png')}/>
                )
                ):
                <View>
                </View>}
                </View>
            
            
                </View>
            </View> 
        
            <View style={{paddingTop:hp('6%'),marginLeft :20,marginRight:20,}}>
                <Text style={{fontSize:17,color:"#696969",fontFamily: 'Helvetica-Light',fontWeight:'400'}}>{data.results.plot}</Text>
            </View>
            <View style={{top:10}}>
            <Text style={{marginLeft :20,fontSize:17,top:8}}>Full Cast & Crew</Text>
            <View style={styles.cache}>
            <View style={{top:20}}>

    <FlatList 
            horizontal={true}
            data={GetCastData}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item})=><CastComponent
            title={item.name}
            poster={item.image_url}
            size={0.6}

            />}
            />
    </View>

    </View>
    </View>

    <View style={{top:hp('87%'),position:'absolute',flexDirection:'row',justifyContent:"space-around"}}>
    {like ?
        

            <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:50,
            borderRadius:30}} onPress={() => removehandler(data.results)}>
        <LinearGradient colors={['#f99f00', '#db3069']}  start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}} style={{position: "absolute", width:50,
            height: 50,justifyContent:'center',
            borderRadius:30}}>
        <Image source={require('../assets/like1.png')} style={styles.profileImage1} />

        </LinearGradient>
        <Text style={{fontSize:15,top:63,left:5,color:"#696969"}}>LIKED</Text>

            </TouchableOpacity>:
            <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:50,
            borderRadius:30}} onPress={addLikehandler}>
        
        <Image source={require('../assets/like.png')} style={styles.profileImage} />
        <Text style={{fontSize:15,top:25,left:10,color:"#696969"}}>LIKE</Text> 

            </TouchableOpacity> 


       
    }
    {
    addfav?



    <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:165,
            borderRadius:30}} onPress={() => removeFavouritehandler(data.results)}>
        <LinearGradient colors={['#ffd700', '#ffd700']}  start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}} style={{position: "absolute", width:50,
            height: 50,justifyContent:'center',
            borderRadius:30}}>
                <Image source={require('../assets/fav1.png')} style={styles.profileImage1} />

        </LinearGradient>
        <Text style={{fontSize:15,top:60,width:100,right:12,color:"#696969"}}>FAVOURITE</Text>

            </TouchableOpacity>:
            <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:165,
            borderRadius:30}} onPress={addFavouritehandler}>
        
        <Image source={require('../assets/fav.png')} style={styles.profileImage} />
        <Text style={{fontSize:15,top:25,width:100,right:12,color:"#696969"}}>FAVOURITE</Text> 

    </TouchableOpacity> 
    }


    {
        com?
        <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:280,
            borderRadius:30}} onPress={statushandler}>   
        <LinearGradient colors={['black', 'black']}  start={{x: 0.1, y: 0.25}} end={{x: 0.7, y: 1.0}} style={{position: "absolute", width:50,
    height: 50,justifyContent:'center',
    borderRadius:30}}>
        <Image source={require('../assets/comment1.png')} style={styles.profileImage1} />
        </LinearGradient>
        <Text style={{fontSize:15,top:60,width:100,right:12,color:"#696969"}}>COMMENT</Text> 

    </TouchableOpacity> 
        
        :
        <TouchableOpacity style={{position: "absolute", width:50,
            height: 50,backgroundColor:'white',top:10,left:280,
            borderRadius:30}} onPress={statushandler}>   
        <Image source={require('../assets/comment.png')} style={styles.profileImage} />
        <Text style={{fontSize:15,top:25,width:100,right:12,color:"#696969"}}>COMMENT</Text> 

    </TouchableOpacity> 
    }
    
            <View>

            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
          
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
            <Text style={styles.modalText}>{data.results.title}</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
                <Image  source={require('../assets/cross.png')}/>
            </Pressable>
            </View>
            <Image style={ styles.infobanner} imageStyle={{borderRadius:5}} 
           source={{uri: data.results.banner}}/>
            <Text style={styles.introtext}>{data.results.description}</Text>

          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={{top:hp('-52%'),left:wp('90%')}} source={require('../assets/info1.png')}/>
            </TouchableOpacity>
        
            </View>
    

    </View>           
    </View>

    )
    }else{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',fontSize:30}}><Text style={{fontSize:30}}>Loading....</Text></View>

    )
    }

    }

    const styles=StyleSheet.create({
    imageStyle :{
        height:hp('35%'),
        width:wp('100%'),
        position: 'absolute',
        backgroundColor:'yellow',
    },
    imageStyle1 :{
        position: 'absolute',
        top:hp('22%'),
            height: 180,
            padding :65,
            marginLeft :20,
            borderRadius :10,
            backgroundColor:'grey',

    },
    text :{
        fontSize: 20,
    },
    cache :{
        backgroundColor:'white',
        width:'100%',
        height:160,
        top:15,
    },

    infoContainer:{
        alignSelf:'center',
        alignItems:'center',
        marginTop:1
    },
    image:{
        
        height:550,
        justifyContent:'flex-end',
        backgroundColor:'transparent'
    },
    TitleName:{
        color:'white',
        fontSize:18,
        top:hp('28%'),
        left:wp('42%'),
        width:wp('55%'),
        fontWeight:'bold',
        fontFamily:"Arial",
    textTransform: 'uppercase',


        
    },
    profileImage1:{
        top:-1,
        left:8,
        width:35,
        height:35,


    },
    profileImage:{
        top:7,
        width:34,
        height:34,
        left:8
        

    },
    shadow: {
        shadowColor: '#696969',
        shadowOffset: {width: -3, height: 10},
        shadowRadius:3,
        shadowOpacity : 0.8,
        elevation :28
    },

    centeredView: {
        flex: 1,
        marginTop: 83
      },
      modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        width:wp('100%'),
        height:hp('90%'),


        shadowOffset: {
          width: '100%',
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        fontSize:29,
        textTransform:'uppercase',
        color:'#696969',
        width:wp('83%')
      },
      introtext:{
          fontSize:16,
          paddingTop:40,
        fontFamily:"Arial",
        padding:24

      },
      infobanner:{
        
            width :340,
            height: 160,
            marginLeft :24,
            borderRadius :5,

           
    
      }

    })
    export default DetailScreen
