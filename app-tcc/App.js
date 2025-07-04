import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>APLICATIVO</Text>
      <StatusBar style="auto"/>

      <View style={styles.viewContent}>
        <Text style={styles.textContent}> TEXTO PARA EXEMPLO DA SEGUNDA VIEW</Text>
        <Text style={styles.textContent}> Parágrafo teste para que eu tenha um texto aqui</Text> 

        <Image source= {{uri: 'https://4409803.fs1.hubspotusercontent-na1.net/hubfs/4409803/react-native%20%281%29.png'}} style={styles.image}>

        </Image>
        <Button
          title="press-me"
          onPress={() => Alert.alert('Simple button pressed')} 
          />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContent: {
    fontSize: 40, 
    color: 'black',
    margin: 10,
  },

  image: {
    width: 60,
    height: 60,
  },

  viewContent: {
    padding: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }

});
