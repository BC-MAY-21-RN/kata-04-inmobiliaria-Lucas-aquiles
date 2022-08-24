import React from 'react';
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const SmallCard= (props)=>{

    return(
        <View>
        <View> 
        <Ionicons name="bed-outline" size={24} color="black" />
          <Text> {props.number_rooms}</Text>  </View>
        <View> 
        <MaterialCommunityIcons name="shower" size={24} color="black" />          <Text> {props.number_bathrooms}</Text> 
          
           </View>
        <View>
        <MaterialCommunityIcons name="move-resize" size={24} color="black" />
           <Text> {props.surface} ft2</Text>
           <Ionicons name="heart-circle" size={24} color="black" />  </View>


        </View>
    )
}



const Card = (props) => {


  return (
    <View> 
        <View>   
        <Image
        source={{uri: props.img}}
        style={{width: 200, height: 200}}
      />

        <FontAwesome name="star" size={24} color="#ffc501" />

         <Text> {props.qualification}</Text>
             </View>

        <View> 

   <Text> {props.name}</Text>

    <View>
    <MaterialCommunityIcons name="google-maps" size={24} color="black" /> 
      <Text> {props.adress}</Text>   </View> 
    <SmallCard  number_rooms={props.number_rooms}  number_bathrooms={props.number_bathrooms}
    surface={props.surface}  
    />
    <View>  <Text> ${props.cost}/m</Text> </View>
    
   </View>



    </View>
  );
}

export default Card;