/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
      <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}/>
      <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input}/> 
      </View>
      <TouchableOpacity  onPress={()=>{}}><Text style={styles.button} >Calcular</Text></TouchableOpacity>




    </View>
    
    );
};

const styles = StyleSheet.create({
  container :{
    flex: 1,

  },
  entradas:{
    flexDirection:"row",
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:22,
  },
  button:{
    alignSelf: 'center',
    padding: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default App;
