import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 


export default class Home extends Component {
  constructor(props) {
	super(props);
  }
  render() {
    return(
		<View style={styles.container}> 
		 	<TouchableOpacity onPress={()=> {this.onPressButton()}}>
		      <Image style={{width:30, height:30,}} source = {require('./assets/Logo.png')}/>
		    </TouchableOpacity>
		</View> )
  }
  onPressButton() {
    Alert.alert("I'm Bob");
  }
}


const styles = StyleSheet.create({
  container: {    
    flexGrow: 1,
    alignItems:'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize:18,
    color:'rgba(255,255,255,1)'
  }
});

