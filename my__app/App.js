import { StyleSheet, Text, View } from "react-native";
import Cards from "./src/components/Cards";

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
