import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../services/Token';
import { serverDelete, serverPost } from '../services/Fetch';

// Edit_Tasks page. It gets taskName, and goalID from View_Goals.js. 
// To complete a task, it deletes the task from 'goals/this.state.goalID /tasks/taskID' endpoint
// and add the task to 'goals/this.state.goalID/completed_tasks/' endpoint.

class Edit_Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {
        taskName: this.props.navigation.getParam('task', 'notask'),
        goalID: this.props.navigation.getParam('goalID', 'noID'),
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const taskID = this.props.navigation.getParam('taskID', 'noID');
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Edit your task here! </Text> 
          <View
            style={styles.line}
          /> 
          <Text style={styles.actionText}> {this.state.taskName} </Text> 
          <View style={styles.button}>
            <Button 
              title= "Complete"
              color= "#ffffff"       
              onPress={() => {
                var params = {
                  name: this.state.taskName   
                }
                retrieveToken()
                  .then((token) => {
                    serverDelete('goals/' + this.state.goalID + '/tasks/' + taskID, token);
                    serverPost('goals/' + this.state.goalID + '/completed_tasks/', params, token);
                    navigate('Dashboard', { name: firstName});    
                  });          
            }}
            />
          </View> 
          <View style={styles.button}>
            <Button 
              title= "Delete"
              color= "#ffffff"       
              onPress={() => {
                retrieveToken()
                  .then((token) => {
                    serverDelete('goals/' + this.state.goalID + '/tasks/' + taskID, token)
                    navigate('Dashboard', { name: firstName})
                  });          
            }}
            />
          </View> 
          <View style={styles.button}>
            <Button 
              title= "Back"
              color= "#ffffff"       
              onPress={() => {
                  navigate('Dashboard', { name: firstName});
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
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
    fontFamily: 'AvenirNext-HeavyItalic',
    textAlign: 'center'
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 20,
    marginLeft: 40,
  },

  
});

export default Edit_Tasks;
