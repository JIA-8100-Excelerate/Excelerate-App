import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';

class Dashboard extends Component {
  constructor(props){
     super(props);
  }


  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');    
    return (
      <View style={styles.container}>
        <Text style={styles.titleText1}> Welcome, {firstName}! </Text>  
        <Text style={styles.titleText2}> This is the Dashboard! </Text>   
        <View style={styles.button}>
          <Button
              title= "View My Goals"
              color= "gray"
              onPress={() => {
                  navigate('View_Goals', {name: firstName});
            }}
          />
        </View>
        <View style={styles.button}>
          <Button 
              title= "Set a New Goal"
              color= "gray"       
              onPress={() => {
                  navigate('Set_Goal', { name: firstName});
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title= "View My Accomplishments"
            color= "gray"
            onPress={() => {
                navigate('View_Accomplishments', { name: firstName});
            }}
          />
        </View>  
        <View style={styles.button}>  
          <Button
                title= "Update Profile"
                color='gray'
                fontSize = '30'
                onPress={() => {
                  navigate('Update_Profile');
            }}
          />     
        </View>
        <View style={styles.button}>  
          <Button
                title= "Logout"
                color='gray'
                fontSize = '30'
                onPress={() => {
                  navigate('Login');
            }}
          />     
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems:'center',
  },
  titleText1: {
    fontSize: 40,     
    color: '#ffffff', 
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Arial-ItalicMT',
  },
  titleText2: {
    fontSize: 40,     
    color: '#ffffff', 
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Arial-ItalicMT',
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },
  button: {
    alignItems:'center',
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 2, 
    marginBottom: 10,
    marginTop: 10,
    shadowOffset:{ width: 10,  height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  goals: {
    width: 300,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 10,
    alignItems:'center', 
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 50
  },
});



export default  Dashboard;