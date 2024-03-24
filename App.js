import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text,TouchableOpacity, View,Image,Button, Alert,ImageBackground,TextInput,ScrollView,Modal, FlatList} from 'react-native';
import * as Font from 'expo-font';
import { useRouter } from 'expo-router';
import React,{useState,useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons.js';


const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular':require('./assets/fonts/InterVariable.ttf')
  })
}

export default function App() {
  
  const img1 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Timothy_Ferriss.jpg/330px-Timothy_Ferriss.jpg';
  /*const getFonts = () => {
    return Font.loadAsync({
      'nunito-regular':require('./assets/fonts/InterVariable.ttf')
    })
  }
  
  const router = useRouter();
  useEffect(() => {})
   const options = {
      method:'GET',
      headers:{
      'X-RapidAPI-Key':'',
      'X-RapidAPI-Host':'',
     }
    };
  */
 const[post,setPost] = useState([]);
 const[username,setUsername] = useState("");
 const[password,setPassword] = useState("");
  const[isModalVisible,setModalVisible] = useState(false);
  const[notif,setnotif] = useState(false);
  const handleSubmit = () => {
    setUsername("");
    setPassword("");
  }
  const fetchData = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const data = await response.json();
    setPost(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    
    
    <ScrollView style={styles.container}  >
      
      <StatusBar backgroundColor='white' />
      
      <ImageBackground source={{uri:'https://jovelon.files.wordpress.com/2014/02/tumblr_n0bwlwivnr1qeodauo1_500.gif'}} style={{marginLeft:-20,marginRight:-20}} ><Text style={styles.text}>Home</Text>
     
      
      <View style={{paddingTop:10,paddingBottom:10}}>
      <ImageBackground source={{uri:'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fs38w1137734vmqyjmifzoeb/public'}} style={styles.image}><Text style={{color:'black',fontSize:20,fontStyle:'normal',fontWeight:'bold',alignSelf:'center',paddingTop:10}}>Trending Anime</Text></ImageBackground>
      
      </View>
      </ImageBackground>
      <View style={{paddingTop:10}}>
        
        <TextInput style={styles.input} placeholder='Search Anime...' placeholderTextColor='white'  >  </TextInput>
        
      </View>
      <View style={{paddingTop:15,paddingBottom:15,alignItems:'center'}}>
      <Button title="LOGIN" onPress={() => setnotif(true)} />
      </View>
      <Modal visible={notif} onRequestClose={() => setnotif(false)} animationType='slide' >
        
        <View style={{flex:1,backgroundColor:'black',justifyContent:'center'}}>
          <ImageBackground source={{uri:'https://rkginstitute.com/wp-content/uploads/2022/03/image-9.png'}} style={{opacity:1.5}} >
          <View style={styles.form}>
            <Text style={styles.inp}>Username</Text>
            <TextInput placeholder='Enter your Username' style={styles.input1} placeholderTextColor='black' ></TextInput>
            <Text style={styles.inp} >Password</Text>
            <TextInput placeholder='Enter Password' secureTextEntry style={styles.input1} placeholderTextColor='black' />
            <View style={{paddingTop:20}} >
            <Button title="Login" style={styles.input} color="midnightblue" onPress={() => {setUsername("");setPassword("");}} />
            </View>
          </View>
          </ImageBackground>
        </View>
        
      </Modal>


      <View>
        
        
      
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'flex-start',marginLeft:10}}>
        <TouchableOpacity>
        <Image source={{uri:'https://img.freepik.com/premium-vector/improvement-mind-level-human-mental-wellbeing-health-confident-mentor-expand-knowledge-gears-self-value-better-faster-thinking-fulfillment-head-learn-balance-vector-illustration_81894-11184.jpg'}} style={styles.img}></Image>
        </TouchableOpacity>
        
       
        
        </View>
        
        
        
      
      <View style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'flex-end',marginRight:10}}>
        
        
        
        <TouchableOpacity >
        <Image source={require('./assets/sound-euphonium.jpg')} style={styles.img}></Image>
        </TouchableOpacity>
        
        </View>
        
        
      </View>

      <View style={{paddingTop:10}} horizontal={true} >
        <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:10}}>
        <TouchableOpacity>
        <Image source={{uri:'https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg'}} style={styles.img}></Image>
        </TouchableOpacity>
        <Text style={{alignSelf:'flex-end',color:'white'}}>Nevah Give up</Text>
        
       
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
            <Button title="Back" color="black" onPress={() => setModalVisible(false)} />
            <FlatList style={{backgroundColor:'black'}} ></FlatList>
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

      
     
  
});
