import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet, serverDelete } from '../services/Fetch';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Tasks page. Displays all remaining tasks for a goal.
// Hits /goals/:goal_id/tasks endpoint for the selected goal.
// See Fetch.js for serverGet and serverDelete methods.
class Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {       
        goalID: this.props.navigation.getParam('goalID', 'noID'),
        arr: '',
     }
     retrieveToken()
      .then((token) => {
        serverGet('goals/' + this.state.goalID + '/tasks', token)
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
      for ( var i =0; i< this.state.arr.length; i++){
        const done = this.state.arr[i].done;
        const task = this.state.arr[i].name;
        const taskID = this.state.arr[i].id;
        if (!done) {
          views.push(
          <View style={styles.taskCard} key={this.state.arr[i].id} >
            <Button      
               title= {this.state.arr[i].name }
               color= "gray"
               onPress={() => { 
                  navigate('Edit_Tasks', { name: firstName, taskID: taskID, done: done, task: task, 
                            goalID: this.state.goalID, goalType: goalType});             
              }}
            />
          </View>);
        }   
      }
      return views;
    } 
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Here are you tasks! </Text>    
          <View>
            {renderTasks()}
          </View>
          <View style={styles.button1}>
            <Button 
              title= "Add more tasks"
              color= "#ffffff"       
              onPress={() => {
                  if (goalType != 'Social' && goalType != 'Physical' && goalType != 'Career' && goalType != 'Academic'
                    && goalType != 'Cooking') {
                    navigate('Customized_Action', {name: firstName, goalID: this.state.goalID, goalType: goalType});
                  } else {
                    const navPage = goalType+'_Action';
                    navigate(navPage, {name: firstName, goalID: this.state.goalID, goalType: goalType});
                  }     
              }}
            />
          </View> 
          <View style={styles.button2}>
            <Button 
              title= "Delete goal"
              color= "#ffffff"       
              onPress={() => {
                retrieveToken()
                  .then((token) => {
                    serverDelete('goals/' + this.state.goalID, token)
                    navigate('Dashboard', { name: firstName})
                  });          
            }}
            />
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
  taskCard: {
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
  button1: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 20,
    marginBottom: 5,
    alignItems:'center', 
  },
   button2: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 5,
    marginBottom: 20,
    alignItems:'center', 
  },
});



export default  Tasks;
