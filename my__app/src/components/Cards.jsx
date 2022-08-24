import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import data from '../../assets/data.json'
import Card from './Card';

const Cards = () => {
    console.log(data)


  return (
    <View> 
    <FlatList  data={data.properties} 
    renderItem={({item}) => <Card name={item.name} 
    adress={item.adress}
     number_rooms={item.number_rooms}  
    number_bathrooms={item.number_bathrooms} surface={item.surface} cost={item.cost} 
    qualification={item.qualification} 
    img={item.img}
    />   }
    >
    
    </FlatList>
    </View>
  );
}

export default Cards;