import {View,Text,Image,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import {useState} from 'react'
import apple from './apple.png'
import spotify from './spotify.png'
import grocery from './grocery.png'
import moneytransfer from './moneyTransfer.png'
import {useTheme} from './ThemeContext'
 const Transactions =()=>{
   const { isDarkTheme } = useTheme()
 imageTemplate = [{key:1,source:apple,name:'Apple Store',des:'Entertainment',cost:'-$5,99'},{key:2,source:spotify,name:'Spotify',des:'Music',cost:'-$12,99'},{key:3,source:moneytransfer,name:'Money Transfer',des:'Transaction',cost:'$300'},{key:4,source:grocery,name:'grocerry',des:'grocerry',cost:'-$88'}

 ]
 return(
   <View>
     <View style={styles.transactionCont}>
      <Text style={[{fontWeight:'bold',fontSize:20},{color: isDarkTheme ? '#fff' : '#000'}]}> Transactions </Text> 
      <TouchableOpacity style={{left:'40%',color:'blue'}}> see all</TouchableOpacity>
     </View>

     <FlatList data={imageTemplate} renderItem={({item})=>{
       return(
         <View style={styles.transactionCont}>
         
         <View style={{backgroundColor:'#E5DFDF',width:70, height:70,alignItems:'center',justifyContent:'center',borderRadius:70}}>
          <Image style={styles.transactionImage} source={item.source}/>
          </View>
          <View style={[{marginLeft:10,marginRight:20,flex:1},{color: isDarkTheme ? '#fff' : '#000'}]}>
          <Text style={[{marginBottom:3,fontWeight:'bold',fontSize:20},{color: isDarkTheme ? '#fff' : '#000'}]}>{item.name} </Text>
          <Text style={{color: isDarkTheme ? '#fff' : '#000'}}> {item.des}</Text>
        </View>
        <View style={{marginHorizontal:'8%',}}>
        <Text style={[{alignItem:'center',alignContent:'center',left:'30%'},{color: isDarkTheme ? '#fff' : '#000'}]} >{item.cost}</Text>
         </View>
          
          
         </View>


       )
     }}/>
   
   
   
   
   </View>
 )

 }


 const styles =StyleSheet.create({
   transactionCont:{
     flexDirection:'row',
     margin:10,
     padding:10
   },
   transactionListCont:{
     margin:30
   },
   transactionImage:{
     width:20,
     height:20,
     margin:25
   }

 })

 export default Transactions