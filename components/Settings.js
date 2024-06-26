import {View , Text,ScrollView,FlatList,StyleSheet,TouchableOpacity,Switch} from 'react-native'
import {useState} from 'react'
import {useTheme} from './ThemeContext'

const Settings=(props)=>{
  const {isDarkTheme,toggleTheme }=useTheme()
  



  return(
  <ScrollView>
    <View style={[styles.container],{backgroundColor:isDarkTheme?'#333':'white'}} >
    <View style={{color: isDarkTheme ? '#fff' : '#000'}}>
    <TouchableOpacity style={styles.container1}> Language
     <Text style={[{left:'71%',fontSize:30},{color: isDarkTheme ? '#fff' : '#000'}]}>></Text>
    </TouchableOpacity>
   
    </View>
    <View style={styles.separator}></View>
     <View style={{color: isDarkTheme ? '#fff' : '#000'}}>
    <TouchableOpacity style={styles.container1}> Profile
    <Text style={[{left:'80%',fontSize:30},{color: isDarkTheme ? '#fff' : '#000'}]}>></Text>
    </TouchableOpacity>
    </View >
    <View style={styles.separator}></View>
     <View style={{color: isDarkTheme ? '#fff' : '#000'}}>
    <TouchableOpacity style={styles.container1}> Contact Us
     <Text style={[{left:'70%',fontSize:30},{color: isDarkTheme ? '#fff' : '#000'}]}>></Text>
    </TouchableOpacity >
    </View >
    <View style={styles.separator}></View>
     <View style={{color: isDarkTheme ? '#fff' : '#000'}} >
    <TouchableOpacity style={styles.container1}> Change Password
     <Text style={[{left:'53%',fontSize:30},{color: isDarkTheme ? '#fff' : '#000'}]}>></Text>
     </TouchableOpacity>
    </View>
    <View style={styles.separator}></View>
    <View style={{color: isDarkTheme ? '#fff' : '#000'}} >
    <TouchableOpacity style={styles.container1}> Privacy Policy
     <Text style={[{left:'60%',fontSize:30},{color: isDarkTheme ? '#fff' : '#000'} ]}>></Text>
     </TouchableOpacity>
    </View>
     <View style={styles.separator}></View>

     <View style={styles.sw}>
      <Text style={[{fontSize:30,fontWeight:'bold'},{color: isDarkTheme ? '#fff' : '#000' }]}>Theme</Text>
      <Switch value={isDarkTheme} onValueChange={toggleTheme } style={{left:120,height:40}}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme? '#f5dd4b' : '#f4f3f4'}
      
      />
     </View>

    </View>
  </ScrollView>
  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'',
    //justifyContent:'center',
    //alignItems:'center',
    flex:1
  },
  container1:{
    margin:'8%',
    flexDirection:'row',
    fontWeight:'bold'
  },
  separator:{
    backgroundColor:'#E5DFDF',
    height:2
  },
  sw:{
    flexDirection:'row',
    margin:10,
    marginVertical:30
    }
} )





export default Settings