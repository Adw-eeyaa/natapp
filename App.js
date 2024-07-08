import { StatusBar } from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StyleSheet, Text,TouchableOpacity, View,Image,Button, Alert,ImageBackground,TextInput,ScrollView,Modal, FlatList, ActivityIndicator, Dimensions} from 'react-native';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import React,{useState,useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons.js';
import axios from 'axios';

import { WebView } from 'react-native-webview';
//import { useNavigation } from '@react-navigation/native';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/InterVariable.ttf')
  })
}
const stack = createNativeStackNavigator();

export default function App() {
 
//var navigation = useNavigation();
  const img1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Timothy_Ferriss.jpg/330px-Timothy_Ferriss.jpg';
  const getFonts = () => {
    return Font.loadAsync({
      'nunito-regular':require('./assets/fonts/InterVariable.ttf')
    })
  }
  
  const router = useRouter();
  const [data,setData] = useState([]);
  const[query,setQuery] = useState("");
//const [isLoading,setLoading] = useState(false);
const myAPI = async (query) =>{
  try{
  const url = `http://10.1.105.115:5000/mental-health?type=${query}&sub_key=deezNUTZballz6969420`;
  let result = await fetch(url)
  let json = await result.json();
  console.log(json.mental_health_data);
  setData(json.mental_health_data);
  
  //setLoading(false);
  }
  catch(error){
    console.log(error);
  }
};
useEffect(()=>{
  
  myAPI();
},[]);
 const [help,setHelp] = useState(false);
 const[post,setPost] = useState([]);
 const[username,setUsername] = useState("");
 const[password,setPassword] = useState("");
  const[isModalVisible,setModalVisible] = useState(false);
  const[notif,setnotif] = useState(false);
  const handleSubmit = () => {
    setUsername("");
    setPassword("");
  }
 /* const fetchData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  */
    function loginSubmit  (){
      const userData = {
        username:username,
        password:password,
        
      };
      axios.post('http://10.1.105.115:6090/login',userData)
      .then((res)=>{console.log(res.data)})
      .catch((e)=>{console.log(e)});
    }
   /* if(isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size={"large"} color={"#000000"}></ActivityIndicator>
        </View>
      )
    }
  */
  return (
    
    
    <ScrollView style={styles.container}  >
      
      <StatusBar backgroundColor='white' />
      
      <ImageBackground source={{uri:'https://jovelon.files.wordpress.com/2014/02/tumblr_n0bwlwivnr1qeodauo1_500.gif'}} style={{marginLeft:-20,marginRight:-20}} ><Text style={styles.text}>Home</Text>
     
      
      <View style={{paddingTop:10,paddingBottom:10}}>
      <ImageBackground source={{uri:'https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/02/19183217/Personality-Development.jpg'}} style={styles.image}><Text style={{color:'black',fontSize:20,fontStyle:'normal',fontWeight:'bold',alignSelf:'center',paddingTop:10}}></Text></ImageBackground>
      
      </View>
      </ImageBackground>
      <View style={{paddingTop:10}}>
      
        <TextInput style={styles.input} placeholder='Search ..' placeholderTextColor={"white"} onChangeText={(text)=>{myAPI(text)}} onEndEditing={()=>setHelp(true)}  /> 
        
        <View style={{paddingTop:15,paddingBottom:15,alignItems:'center'}}>
      <Button title="Look For Help" color={"brown"} onPress={() =>setHelp(true)} />
      </View>
      <Modal visible={help} onRequestClose={() => setHelp(false)} animationType='slide'>
        
        <FlatList data={data} renderItem={({item})=> <View style={styles.container}>
        <Text style={{fontSize:20,color:'white',justifyContent:'center'}}>{item.content}</Text>
        <Text style={{fontSize:20,color:'white',justifyContent:'center'}}>{item.title}</Text>
          <Text style={{fontSize:20,color:'white',justifyContent:'center'}}>{item.type}</Text>
          {item.url.includes('youtube.com') ? (<WebView style={styles.webview}  javaScriptEnabled={true} domStorageEnabled={true} originWhitelist={`${item.url}`} source={{uri : item.url}}/>)
           :(<WebView style={styles.webview} domStorageEnabled={true} javaScriptEnabled={true} source={{uri:item.url}} originWhitelist={`${item.url}`} />)
           }
          
        </View> } />
      </Modal>
         
        
      </View>
      <View style={{paddingTop:-2,paddingBottom:15,alignItems:'center'}}>
      <Button title="LOGIN" onPress={() => setnotif(true)} />
      </View>
      <Modal visible={notif} onRequestClose={() => setnotif(false)} animationType='slide' >
        
        <View style={{flex:1,backgroundColor:'black',justifyContent:'center'}}>
          <ImageBackground source={{uri:'https://rkginstitute.com/wp-content/uploads/2022/03/image-9.png'}} style={{opacity:1.5}} >
          <View style={styles.form}>
            <Text style={styles.inp}>Username</Text>
            <TextInput placeholder='Enter your Username' style={styles.input1} placeholderTextColor='black' onPress={loginSubmit} onChangeText={(text)=>{setUsername(text)}} value={username} ></TextInput>
            <Text style={styles.inp} >Password</Text>
            <TextInput placeholder='Enter Password' icon="Anime" secureTextEntry style={styles.input1} onPress={loginSubmit} onChangeText={(txt)=>{setPassword(txt)}} placeholderTextColor='black' />
            <View style={{paddingTop:20}} >
            <Button title="Login" style={styles.input} color="midnightblue" onPress={()=>{loginSubmit()}} />
            </View>
          </View>
          </ImageBackground>
          <Button  title="Go Back" color="black" onPress={()=>{setModalVisible(false)}}/>
        </View>
        
      </Modal>


      <View>
        
        
      
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'flex-start',marginLeft:10}}>
        <TouchableOpacity>
        <Image source={{uri:'https://www.21kschool.com/us/wp-content/uploads/sites/37/2022/10/5-Tips-For-Students-For-Personality-Development.png'}} style={styles.img}></Image>
        </TouchableOpacity>
        
       
        </View>
        
        
        
      
      <View style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'flex-end',marginRight:10}}>
        
        
        
        <TouchableOpacity >
        <Image source={{uri:'https://theyellowspot.com/wp-content/uploads/2018/09/PD.jpg'}} style={styles.img}></Image>
        </TouchableOpacity>
        
        </View>
        
        
      </View>

      <View style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:10}}>
        <TouchableOpacity>
        <Image source={{uri:'https://eslbrains.com/wp-content/uploads/2023/03/Honest-creative-or-lazy-personality-adjectives-473x381.png'}} style={styles.img}></Image>
        </TouchableOpacity>
        
        
       
        </View>
        
        
      </View>
      
      <View style={{paddingTop:10,width:100,alignSelf:'center',paddingBottom:50}}>
        <Button  style={{fontWeight:'bold',color:'black'}} color="midnightblue" title='Read blogs'  onPress={() => setModalVisible(true)}></Button>
        <View style={{height:200,width:200}}>
          
        <Text style={{alignItems:'flex-start',fontStyle:'italic',fontWeight:'800',color:'white',paddingTop:10,fontSize:25,marginLeft:-120}}>Quotes for a Growth Mindset</Text>
        <Text style={{color:'white',alignSelf:'flex-start',marginLeft:-110}}>“Do the best you can until you know better. ...
“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.” - ...
“Stay afraid, but do it anyway. ...
“One can choose to go back toward safety or forward toward growth.</Text>
      
        </View>
        </View>
    
        <Modal 
           visible={isModalVisible}
           animationType='slide'
           presentationStyle='pageSheet'
           onRequestClose={() => setModalVisible(false)}
           
        >
          
          <View style={{flex:1,backgroundColor:'black',padding:69}}  >
            <Image source={{uri:'https://www.betterup.com/hubfs/Blog%20Images/Personal%20development/personal-development-people-smiling-working.jpg'}} style={{height:200}} />
            <Text style={{alignSelf:'flex-start',fontSize:30,color:'white',paddingBottom:25,fontWeight:'800'}}>Blogs</Text>
            <Text style={{color:'white'}}>Personality development is the continuous advancement of character as far as trademark enthusiastic reactions or disposition, a conspicuous style of life, individual jobs and job practices, a bunch of qualities and objectives, average examples of change, trademark relational relations and other connections, trademark attributes, and a somewhat fixed mental self view.
            </Text>
            <Button title="Back" color="black" onPress={() => {myAPI("blog");setModalVisible(false)}} />
            
          </View>
          <View style={styles.container}>
            <FlatList data={data} renderItem={({item}) => <View>
            {item.type.includes('blog')?(<WebView source={{uri: item.url}} domStorageEnabled={true} javaScriptEnabled={true} originWhitelist={item.url} ></WebView>):(<View><Text style={{color:'white'}}>{item.content}</Text></View>)}
            </View>} />
          </View>
          
          
        </Modal>
        </View>
        
    </ScrollView>
    
    
    


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    
    paddingTop: Platform.OS == 'android' ? 20:0,
    paddingEnd: Platform.OS == 'android'? 0:0,  

  },
  text:{
     textAlign:'center',
     borderWidth:0,
     color:'hwb(120,269%,10%)',
     fontWeight:'bold',
     borderColor:'gray',
     borderCurve:'continuous',
     fontSize:35,
     textAlignVertical:'center',
     paddingTop:0,
     borderWidth: 0,
     borderRadius:0,
     fontWeight:'400',
     
     
     },
     input:{
      borderWidth:5,
      borderRadius:70/2,
      opacity:0.49,
      backgroundColor:'gray',
      shadowColor:'white',
      shadowOffset:{
        width:15,
        height:50,
      },
      shadowOpacity:0.25,
      shadowRadius:10,
      elevation:5,
      marginLeft:10,
      borderColor:'gray',
      width:250,
      height:38,
      color:'white',
      alignSelf:'center',
      marginRight:10,
     },
     image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "green",
      alignSelf:'center',
      alignContent:'center',
      paddingTop:10,
    },
    form:{
      
      
      backgroundColor:'navyblue',
      padding:20,
      borderRadius:10,
      shadowColor:'white',
      shadowOffset:{
        width:0,
        height:2
      },
      shadowOpacity:0.25,
      shadowRadius:5,
      elevation:5
    },
    inp:{
      paddingBottom:10,
      fontSize:18,
      fontWeight:'bold',
      color:'black',
      alignSelf:'center',
      
    },
    input1:{
      borderWidth:1,
      borderRadius:2,
      borderColor:'white',
      color:'white', 
      
    },
    img:{
      height:220,
      width:190,
      borderRadius:10,
      borderColor:'gray',
      borderWidth:5,
      marginLeft:10,
      
    },
    webview:{
      width:Dimensions.get('window').width - 20,
      height:800,
      marginTop:10,
    }
      
     
  
});
