import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../services/Token';
import { serverPut, serverDelete } from '../services/Fetch';

class Edit_Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {
        taskName: this.props.navigation.getParam('task', 'notask'),
        taskDone: this.props.navigation.getParam('done', 'notaskDone'),
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
          <Text style={styles.titleText}> Hi {firstName},</Text>
          <Text style={styles.headerText}> Edit your task here! </Text> 
          <View
            style={styles.line}
          /> 
          <Text style={styles.headerText}> {this.state.taskName} </Text> 
          <View style={styles.button}>
            <Button 
              title= "Complete"
              color= "#ffffff"       
              onPress={() => {
                this.setState({
                     taskDone: true
                 })
                var params = {
                  done: true,   
                }
                retrieveToken()
                  .then((token) => {
                    serverPut('goals/' + this.state.goalID + '/tasks/' + taskID, params, token);
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
                var params = { 
                }
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
  titleText: {
    fontSize: 50,     
    color: '#ffffff',
    alignItems:'center', 
  },
  headerText: {
    fontSize: 30,     
    color: '#ffffff',
    alignItems:'center', 
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
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Edit_Tasks;
