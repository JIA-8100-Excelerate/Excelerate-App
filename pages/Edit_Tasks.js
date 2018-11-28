import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../services/Token';
import { serverDelete, serverPost, serverPut } from '../services/Fetch';

// Edit_Tasks page. It gets taskName, and goalID from View_Goals.js. 
// To complete a task, it deletes the task from 'goals/this.state.goalID /tasks/taskID' endpoint
// and add the task to 'goals/this.state.goalID/completed_tasks/' endpoint.

class Edit_Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {
        taskName: this.props.navigation.getParam('task', 'notask'),
        goalID: this.props.navigation.getParam('goalID', 'noID'),
        comment: '',
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const taskID = this.props.navigation.getParam('taskID', 'noID');
    const ismentor = this.props.navigation.getParam('ismentor', false);
    const mentee = this.props.navigation.getParam('mentee', 'GuitarBob99');
    const task_comment = this.props.navigation.getParam('comment', false);
    const renderComments = () => {
      if (task_comment) {
        return(
          <View style={styles.container}>
            <Text style={styles.commentText}> {"Comment: " + task_comment} </Text>
          </View>);
      } else {
        return(
            <Text style={styles.commentText}> {"(This task does not have any commet yet!)"} </Text>
          );
      }
    }
    const renderButtons = () => {
      if (ismentor) {
        return(
          <View style={styles.container}>
            <Text style={styles.titleText1}> Make your suggestion for {mentee} here! </Text> 
            <View
              style={styles.line}
            /> 
            <Text style={styles.actionText}> {this.state.taskName} </Text>
            <View style={styles.container}>
              <TextInput
                onChangeText={(value) => this.setState({comment: value})}
                style={styles.inputBox}
                placeholder="Make your suggestion here!"
                placeholderTextColor="white"
              /> 
            </View>
            <View style={styles.button}>
              <Button 
                title= "Make suggestion"
                color= "#ffffff"       
                onPress={() => {
                  var params = {
                    name: this.state.taskName,
                    comment: this.state.comment,   
                  }
                  retrieveToken()
                    .then((token) => {
                      serverPut('goals/' + this.state.goalID + '/tasks/' + taskID, params, token);
                      navigate('Dashboard', { name: firstName});    
                    });          
                }}
              />
            </View> 
          </View>);
      } else {
        return(
          <View style={styles.container}>
            <Text style={styles.titleText1}> Hi {firstName},</Text>
            <Text style={styles.titleText2}> Edit your task here! </Text> 
            <View
              style={styles.line}
            /> 
            <Text style={styles.actionText}> {this.state.taskName} </Text> 
            <Text style={styles.actionText}> {renderComments()} </Text> 
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
        </View>);
      }
    }
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        {renderButtons()}
     </KeyboardAwareScrollView>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
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
    textAlign: 'center',
  },
  commentText: {
    fontSize: 20,     
    color: '#ffffff',
    alignItems:'center', 
    fontFamily: 'Arial-ItalicMT',
    textAlign: 'center',
    marginTop: 30,
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
  },
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginTop: 20,
    paddingHorizontal: 16,
    color: '#ffffff'
  },
  
});

export default Edit_Tasks;
