import React,{useState} from 'react'
import {Image,View, ScrollView,StyleSheet,Text} from 'react-native'
import searchIcon from './searchbar.png'
import ellipse from './profile.png'
import Card from './Card'
import Functions from './function'
import Transactions from './Transactions'
import {useTheme} from './ThemeContext'
const Home = ({navigation})=>{
const { isDarkTheme } = useTheme()
  
  return(
    <ScrollView>
    <View style={[styles.container,{backgroundColor: isDarkTheme ? '#333' : '#fff'}]}>
      <View style={styles.container2}>
        <Image  style={{height:60,width:60}}source ={ellipse}/>
        <View style={styles.container3}>
        <Text style={[{fontSize:20},{color: isDarkTheme ? '#fff' : '#000'}]}>Welcome Back,</Text>
        <Text style={[{marginTop:8,fontWeight:'bold',fontSize:20},{color: isDarkTheme ? '#fff' : '#000'}]}> Prince Affedzie</Text>
        </ View>
        <View style={styles.image1}>
        <Image style={{top:10,marginHorizontal:10}} source ={searchIcon}/>
      </View>
      </View>
      <View style={{left:20}}>
       <Card/>
      </View>
      <View style={{margin:20}}>
        <Functions/>
      </View>
      <Transactions/>
     </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   //backgroundColor:'white'
 },
 container2:{
   flexDirection:'row',
   margin:20
 },
 container3:{
   marginHorizontal:12
 },
 image1:{
   left:'8%',
   height:45,
   width:45,
   borderRadius:20,
  
   
   
   backgroundColor:'#E5DFDF'
    
  }

})
  

export default Home