import React from 'react';
import { View, TextTextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,Text } from 'react-native';
import { Calendar } from 'react-native-calendars';


function MainScreen() {
  return (

    <View style={styles.background}>
      <Text style={styles.title}>Snowe</Text>
      <View style={styles.jumbotron}>
      <Calendar style={styles.calendar}/>
      </View>
    </View>
    
   
  );
}



const styles = StyleSheet.create({


  title: {
    fontSize: 35,
    marginTop: 10,
    marginBottom: 15,
    fontStyle: 'italic',
    color: 'black',

  },

  jumbotron: {

    padding: 20,
    borderRadius: 10,
  }
  ,
  calendar: {

  }
  ,
  background: {
    flex: 1,
    backgroundColor: 'skyblue',


  }


})

export default MainScreen; 









