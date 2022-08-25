import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import data from "../../assets/data.json";
import Card from "./Card";

const Cards = () => {

  const renderItem = ({ item }) => {

    return (
        <Card
            item={item}/>
    );
};


  return (
    <View style={styles.container}>
      <FlatList
        data={data.properties}
        renderItem={renderItem}>

      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width:'100%',

  },
});



export default Cards;
