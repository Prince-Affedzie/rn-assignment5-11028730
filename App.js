import React, {useState} from 'react'
import {View,StyleSheet,ScrollView,Text,Image}  from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import home from './components/home.png'
import settings from './components/settings.png'
import myCard from './components/myCards.png'
import statistics from './components/statictics.png'
import {Icon} from 'react-native-elements'
const Tab = createBottomTabNavigator()
import Home from './components/Home'
import Settings from './components/Settings'
import { ThemeProvider } from './components/ThemeContext'
const app = ()=>{
return(
<ThemeProvider>
<NavigationContainer>
 <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} options={{
      tabBarIcon: ({focused})=>(
        <Image source={home} 
        />
      ),
    }} />
    
    <Tab.Screen name='MyCards' options={{
      tabBarIcon:()=>(
       <Image source={myCard}/> 
      )
    }}/>

    <Tab.Screen name='Statistics' options={{
      tabBarIcon:()=>(
        <Image source={statistics}/>
      )
    }}/>

    <Tab.Screen name= 'Settings' component={Settings} options={{
      tabBarIcon: ({focused})=>(
        <Image source={settings} 
        />

      ),
    }}/>
 
 </Tab.Navigator>
  


</NavigationContainer>
</ThemeProvider>
)}

export default app