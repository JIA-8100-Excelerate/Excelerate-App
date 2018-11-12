import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    return(
    <View style={styles.container}>
     <Image style={{width:100, height:100}}
     source = {require('../assets/gt_logo.png')}/>
     <Text style={styles.logoText}>Welcome to the Excel App</Text>
    </View> 
    )
  }
}

const styles = StyleSheet.create({
  container: {    
    flexGrow: 1,
    marginTop: 30,
    alignItems:'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize:18,
    color:'rgba(255,255,255,1)',
    fontFamily: 'Arial-ItalicMT',
  }
});