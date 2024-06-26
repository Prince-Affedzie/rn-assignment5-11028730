import {View, StyleSheet,Image,FlatList,Text} from 'react-native'
import React,{useState} from 'react'
import send from './send .png'
import receive from './recieve.png'
import loan from './loan.png'
import topup from './topUp.png'
import {useTheme} from './ThemeContext' 
const Functions=()=>{
  const { isDarkTheme } = useTheme()
  const [task ,setTask] = useState([{key:1,source:send,text:'Send'},{key:2,source:receive,text:'Recieve'},{key:3,source:loan,text:'Loan'},{key:4,source:topup,text:'Top-up'}])
  return(
    <View  >
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={task} renderItem={({item})=>{
        return(
          <View style={{margin:20,backgroundColor:'#E5DFDF',borderRadius:120,justifyContent:'center',width:60,height:60}}>
            <Image style={{top:10,marginHorizontal:22}} source={item.source}/>
            <View style={{top:28,left:12}}> <Text style= {{color: isDarkTheme ? '#fff' : '#000'}}>{item.text}</Text></View>
          </View>
                  
           
          
         
        )
      }}/>
    
    
    </View>
  )
}
export default Functions
