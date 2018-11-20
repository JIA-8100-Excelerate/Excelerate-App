import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import CheckBox from 'react-native-check-box'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Accomplishments page. Displays all completed tasks for a goal.
// Hits /goals endpoint. Completed tasks are read from the json response.
// See Fetch.js for serverGet method.
class View_Accomplishments extends Component {
  constructor(props){
     super(props);
     this.state = {       
        arr: '',
     }
     retrieveToken()
      .then((token) => {
        serverGet('goals', token)
          .then((res) => {
            this.setState({arr: res})
        });
      });
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const renderGoals = () => {
      const views = []; 
      for ( var i =0; i< this.state.arr.length; i++){
      const tasks = this.state.arr[i].tasks;
      const goalID = this.state.arr[i].id;
      const goalType = this.state.arr[i].category;
       views.push(
        <View style={styles.button} key={this.state.arr[i].category} >
          <Button      
             title= {this.state.arr[i].category}
             color="gray"
             onPress={() => {
                navigate('Done_Tasks', { name: firstName, tasks: tasks, goalID: goalID, goalType: goalType});
            }}
          />
        </View>);
      }
      return views;
    } 

    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>    
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Here's your accomplishments! </Text> 
          <View>
            {renderGoals()}
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
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
  },
  button: {
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
    alignItems:'center',
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default View_Accomplishments;
