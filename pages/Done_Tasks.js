import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class Done_Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {       
        goalID: this.props.navigation.getParam('goalID', 'noID'),
        arr: '',
     }

     retrieveToken()
      .then((token) => {
        serverGet('goals/' + this.state.goalID + '/completed_tasks', token)
          .then((res) => {
            this.setState({arr: res})
        });
      });
  }


  render() { 
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99'); 
    const goalType = this.props.navigation.getParam('goalType', 'Rip');
    const renderTasks = () => {
      const views = []; 
      this.state.count = 0;
      this.state.summary = '';
      for ( var i =0; i< this.state.arr.length; i++){
        const task = this.state.arr[i].name;
        this.state.count++;
        this.state.summary = "\n" + this.state.count.toString() + ' .' + this.state.arr[i].name;
        views.push(
        <View key={i} >
          <Text style={styles.actionText}> {this.state.summary} </Text>
        </View>);
           
      }
      return views;
    } 
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Here are the tasks you have finished! </Text>    
          <View>
            {renderTasks()}
          </View>
        </View>
      </KeyboardAwareScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
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
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Arial-ItalicMT',
  },
  imageStyle: {
    backgroundColor: '#03a9f4',
    width: 207,
    height: 210,
    margin: 15,
    marginBottom: 50,
  }, 
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 10,
    alignItems:'center', 
  },
});



export default  Done_Tasks;