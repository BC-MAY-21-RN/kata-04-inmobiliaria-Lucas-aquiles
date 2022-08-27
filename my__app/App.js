import { StyleSheet, View } from "react-native";
import Cards from "./src/components/Cards";
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:15,
    width:'100%',
    
  },
});
