import React from 'react';
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';


const SmallCard= (props)=>{

    return(
        <View>

        <View> <Text> {props.number_rooms}</Text>  </View>
        <View> <Text> {props.number_bathrooms}</Text>  </View>
        <View> <Text> {props.surface} ft2</Text>  </View>


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
        <Text> {props.qualification}</Text>
             </View>

        <View> 

   <Text> {props.name}</Text>

    <View> <Text> {props.adress}</Text>   </View> 
    <SmallCard  number_rooms={props.number_rooms}  number_bathrooms={props.number_bathrooms}
    surface={props.surface}
    />
    
   </View>



    </View>
  );
}

export default Card;