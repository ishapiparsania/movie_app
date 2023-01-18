    import React,{useEffect} from 'react';
    import type {Node} from 'react';
    import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView,FlatList,Button,Platform,Alert,KeyboardAvoidingView, KeyboardAvoidingViewBase,Image} from 'react-native'
    import axios from 'axios';
    import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
    } from 'react-native/Libraries/NewAppScreen';
    import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
    import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
    import MovieScreen from './MovieScreen';
    import TvScreen from './TvScreen';
    import ProfileScreen from './ProfileScreen';
    import { useNavigation } from '@react-navigation/native'


    const Tab = createMaterialBottomTabNavigator();
    const HomeScreen = () => {
        const navigation=useNavigation();

    return (
        <Tab.Navigator
        initialRouteName="MovieScreen"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'white' }}
    >
        <Tab.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({ focused }) => (
            
            <Image  style={styles.ImageStyle1} source={require('../assets/moviei.png')} 
            />

            ),
        }}
        />
        <Tab.Screen
        name="TvScreen"
        component={TvScreen}
        
        options={{
            tabBarLabel: 'Tv',
            tabBarIcon: ({ color }) => (
            <Image  style={styles.ImageStyle} source={require('../assets/tvi.png')} />

            ),
        }}
        />
        <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
            <Image  style={styles.ImageStyle} source={require('../assets/profilei.png')}
            />

            ),
        }}
        />
    </Tab.Navigator>

        
    );
    };

    const styles = StyleSheet.create({
        ImageStyle:{
            width:30,
            height:30,
            bottom:4
        },

        ImageStyle1:{
            width:22,
            height:22,
            bottom:2
        },

    });

    export default HomeScreen;
