import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cards from './src/components/Cards'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app </Text>
        <Text>haa</Text>
      <StatusBar style="auto" />
      <Cards/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
