import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { retrieveToken } from '../services/Token';
import { serverUpdate } from '../services/Fetch';

class Goal_Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalType: this.props.navigation.getParam('goalType', 'Rip'),
      goalID: this.props.navigation.getParam('goalID', 'RipID'),
    }
    this.postTasks = this.postTasks.bind(this);
  }

  postTasks(actions) {
    for (let i = 0; i < 5; i++) {
      if (actions[i] != '') {
        retrieveToken()
          .then((token) => {
            var taskParams = {
              name: actions[i]
            }
            serverUpdate('POST', 'goals/' + this.state.goalID + '/tasks', taskParams, token);
        });
      }
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob97');
    const actions = this.props.navigation.getParam('actions', 'NoActionYet');
    const goalType = this.props.navigation.getParam('goalType', 'Rip');
    this.state.summary = '';
    this.state.count = 1;
    for (let i = 0; i < 5; i++) {
      if (actions[i] != '') {
        this.state.summary+= "\n" + this.state.count.toString() + '. ' + actions[i];
        this.state.count++;
      } 
    }
    return(
      <View style={styles.container}>
        
        <Text style={styles.titleText}>  Here is your Goal Summary! </Text> 
        <View
          style={styles.line}
        /> 
        <Text style={styles.actionText}>  To accomplish your new {goalType} goal, you will: {this.state.summary} </Text>
        <View style={styles.button}>
          <Button
                title= "Submit"
                color='#ffffff'
                fontSize = '30'
                onPress={() => {
                  this.postTasks(actions);
                  navigate('Dashboard', {name: firstName, goalType: goalType, actions: actions});
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
  },
  titleText: {
    fontSize: 50,     
    color: '#ffffff', 
    marginLeft: 20
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  box: {
    marginTop: 50,
    padding: '50'
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
    marginLeft: 40,
    marginTop: 20,
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
    marginBottom: 10,
    marginLeft: 40,
    marginTop: 20
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Goal_Summary;
