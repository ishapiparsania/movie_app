import React, { useEffect } from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'
import Login from './Screens/Login';
import Register from './Screens/Register';
import Third from './Screens/Third';
import Onboard from './Screens/Onboard';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/Screen3'
import Splash from './Screens/Splash';
import reduxStore from './store/reduxStore'
import { PersistGate } from 'redux-persist/integration/react';
import StatusScreen from './Screens/StatusScreen';

import store from './store/reduxStore'
import { Provider } from 'react-redux';
import NowMoreList from './Screens/NowMoreList'
import Settings from './Screens/Settings';
import SearchMovie from './Screens/SearchMovie';
import { LogBox } from 'react-native';
import Category from './Screens/Category'


LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  const {store,persistor}=reduxStore();
  


return (

<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>

    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash}  options={{headerTintColor: 'white',
        headerShown: false}} />

        <Stack.Screen name="Onboard" component={Onboard} options={{headerTintColor: 'white',
        headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTintColor: 'white',
        headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerTintColor: 'white',
        headerShown: false}} />
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{headerTintColor: 'white',
        headerShown: false}} 
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen}
        options={{headerTintColor: 'white',
        headerBackTitleVisible:true,
        headerTransparent:true,
        headerTitle:''
      }}
        />
        <Stack.Screen name="Screen1" component={Screen1} options={{headerTintColor: 'white',
        headerShown: false}} />
        <Stack.Screen name="Screen2" component={Screen2} options={{headerTintColor: 'white',
        headerShown: false}} />
        <Stack.Screen name="Screen3" component={Screen3} options={{headerTintColor: 'white',
        headerShown: false}} />
        <Stack.Screen name="Third" component={Third}  />
        <Stack.Screen name="Category" component={Category}  />

        <Stack.Screen name="StatusScreen" component={StatusScreen} 
        options={{headerTintColor: 'black',
        headerBackTitleVisible:true,headerTransparent:true,headerTitle:''}}
        />

        <Stack.Screen name="Settings" component={Settings} options={{headerTintColor: 'black',headerBackTitleVisible:true,headerTransparent:true,headerTitle:'' }} />
        <Stack.Screen name="SearchMovie" component={SearchMovie}  options={{headerTintColor: 'white',
        headerShown: false}} />
        <Stack.Screen name="NowMoreList" component={NowMoreList} options={{headerTintColor: 'black',
        headerBackTitleVisible:true,headerTransparent:true,headerTitle:''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
  </Provider>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
