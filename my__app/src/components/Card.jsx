import React from "react";
import { FlatList, StyleSheet, Text, View, Image, ImageBackground,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Ionicons, FontAwesome} from "@expo/vector-icons";

const SmallCard = (props) => {


  return (
    <View style={styles.smallsection1}>
        <Ionicons name="bed-outline" size={24} color="black" />
        <Text> {props.number_rooms}</Text>


        <MaterialCommunityIcons name="shower" size={24} color="black" />
        <Text> {props.number_bathrooms}</Text>


        <MaterialCommunityIcons name="move-resize" size={24} color="black" />
        <Text> {props.surface} </Text>
        
    </View>
  );
};

const Card = ({item}) => {
  return (
    <TouchableOpacity >
    <View style={styles.container}>
        <ImageBackground style={styles.section1}
          source={{ uri: item.img }}
          >

        <FontAwesome name="star" size={24} color="#ffc501" />

        <Text> {item.qualification}</Text>
      </ImageBackground>


        <View style={styles.section}>  
        <Text> {item.name}</Text>

          <View style={styles.smallsection}>   
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
          <Text> {item.adress}</Text>
          </View>
        

        <SmallCard  
          number_rooms={item.number_rooms}
          number_bathrooms={item.number_bathrooms}
          surface={item.surface}
        />
        
            <View style={styles.smallsection2}>   
          <Text> ${item.cost}/2</Text>
          <Ionicons name="heart-circle" size={24} color="black" />
          </View>
          </View>
    </View>
    </TouchableOpacity >

  );
};

const styles = StyleSheet.create({

  container: {
    margin: 5,
    borderWidth: 1,
    borderColor: "thistle",
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',    

  },
  section:{
    borderWidth: 1,
    borderColor: "thistle",
    width: 200, 
    height: 200,

  },
  section1:{
    width: 150, 
    height: 150,
    borderRadius: 25,
    overflow: 'hidden',
    blurRadius:220,
  }
 ,
 smallsection:{
  display:'flex',
  flexDirection:'row',
 },
 smallsection1:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly'
 },
 smallsection2:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between'
 }
});




export default Card;
