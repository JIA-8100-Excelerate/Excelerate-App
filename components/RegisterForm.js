import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
          <TextInput style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="white"
          />
          <TextInput style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          />
          <TextInput style={styles.inputBox}
          placeholder="First Name"
          placeholderTextColor="white"
          />
          <TextInput style={styles.inputBox}
          placeholder="Last Name"
          placeholderTextColor="white"
          />
          <View style={styles.button}>
            <Button onPress={() => {
              Alert.alert("press")
            }}
            title= "Register"
            color='#ffffff'
            >
            </Button>
          </View>
      </View> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#ffffff'
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 20,
    justifyContent:'center',
  },
});