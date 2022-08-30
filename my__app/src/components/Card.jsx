import React, { useState } from "react";

import {  StyleSheet, Text, View, ImageBackground,TouchableOpacity} from "react-native";
import { MaterialCommunityIcons, Ionicons, FontAwesome} from "@expo/vector-icons";
import Lottie from 'lottie-react-native';


// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
// }


const SmallCard = (props) => {

  let {number_bathrooms, number_rooms,surface} = props

var a = "bed-outline";
var b = "shower"

  return (
    <View style={styles.smallsection1}>
      <View style={styles.smallsection} >  
        <Ionicons name={a} style={styles.icons}   />
        <Text  style={styles.text}> {number_rooms}</Text>
        </View>
        <View style={styles.smallsection}>  
        <MaterialCommunityIcons name={b} style={styles.icons} />
        <Text style={styles.text}  > {number_bathrooms}</Text>
        </View>
        <View style={styles.smallsection}>  
        <MaterialCommunityIcons name="move-resize" style={styles.icons}
          />
        <Text style={styles.text}> {surface} </Text>
        </View>
    </View>
  );
};




const Card = ({item}) => {
  const [expanded, setExpanded] = useState(false);
 
  const [boxPosition, setBoxPosition] = useState('left');
  const toggleBox = () => {
  
    setBoxPosition(boxPosition === 'left' ? 'right' : 'left');
  };

  {expanded ? '#20c997': 'red'}

  return (
    
    <TouchableOpacity   activeOpacity={0.8}   underlayColor="red"
    onPress={    (  ) => {
      // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setExpanded(!expanded); 
      {toggleBox()}
    }}
    >
          <Lottie source={require('../../assets/sky.json')} autoPlay loop />

         <View style={ (boxPosition === 'left') ? (styles.container) : (styles.containerP)}>
      <View style ={styles.container1}> 

        <ImageBackground style={styles.section1}
          source={{ uri: item.img }} >

      <View style={styles.smallsection5}> 
        <FontAwesome name="star" size={10} color="#ffc501" />
        <Text style={{fontWeight:"700", color:"#664d03"}}> {item.qualification}</Text>
        </View>
      </ImageBackground>


        <View style={styles.section}>  
        <Text style={{fontWeight:"700", fontSize:22, letterSpacing:1}}> {item.name}</Text>

          <View style={styles.smallsection}>   
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
          <Text style={{fontWeight:'600', color:'gray', letterSpacing:1}}> {item.adress}</Text>
          </View>
        

        <SmallCard  
          number_rooms={item.number_rooms}
          number_bathrooms={item.number_bathrooms}
          surface={item.surface}
        />
        
            <View style={styles.smallsection2}>   
          <Text style={{fontWeight:"700", fontSize:20} }> ${item.cost}/m</Text>
          <Ionicons name="heart-circle" size={30} color=  {expanded ? '#20c997': 'red'} />
          </View>
          </View>
    </View>
    </View>

    </TouchableOpacity >

  );
};

const styles = StyleSheet.create({
 
  

  container: {
    
    backgroundColor:'#F5F9F8',
    marginTop: 5, 
    width:'100%',
    borderRadius:10
  },
  containerP:{
    backgroundColor:'#F5F9F8',
    marginTop: 5, 
    width:'100%',
    borderRadius:10,
    transform: [{ scale: 1.1 }]
  },

  container1:{
    padding:10,
    marginLeft:'auto',
    marginRight:'auto',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',

  },

  section:{
   
    width: "70%", 
    height: 110, 
    paddingLeft:10 

  },
  section1:{
    width: 100, 
    height: 110,
    borderRadius: 15,
    overflow: 'hidden',
  }
 ,
 smallsection:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',

 

 },
 smallsection1:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  
 },
 smallsection2:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',

 },
 smallsection5:{
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#fff3cd',
  position:'absolute',
  left:30,
  bottom: 8,
  borderRadius:8,
  width:"40%"
 },
 icons:{
  size:24,
  color:"black"

 }
 ,
 text:{
  fontWeight:"700"
 }

});




export default Card;
