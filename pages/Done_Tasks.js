import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// This is Done_Task page. Users can view all tasks they have finished. 
// It gets the goalID param from View_Accomplishments.js, and then use goalID to hit
// the 'goals/this.state.goalID/completed_tasks' end point under that goal. It passes 
// tasks' name and tasks'id to Edit_Accomplishments.js as accomplishment and accID.

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
    const ismentor = this.props.navigation.getParam('ismentor', false);
    const mentee = this.props.navigation.getParam('mentee', 'Rip');
    this.state.count = 0;
    const renderTasks = () => {
      const views = []; 
      if (ismentor) {
        views.push(
          <View style={styles.container} key={ismentor}>
            <Text style={styles.titleText1}> Here are the tasks {mentee} has finished!</Text> 
        </View>);
      } else {
        views.push(
          <View style={styles.container} key={ismentor}>
            <Text style={styles.titleText1}> Hi {firstName},</Text>
            <Text style={styles.titleText2}> Here are the tasks you have finished! </Text>  
        </View>);
      }
      for ( var i = 0; i< this.state.arr.length; i++){
        const accomplishment = this.state.arr[i].name;
        const accID = this.state.arr[i].id;
        this.state.count++;
        if(ismentor) {
          views.push(<View key={this.state.arr[i].id}>
            <View style={styles.container}> 
              <Text style={styles.titleText2}>{"\n" + this.state.count.toString() + '. ' 
              + this.state.arr[i].name}</Text>
            </View>
          </View>);
        } else {
          views.push(
            <View style={styles.container} key={this.state.arr[i].id}>  
              <View style={styles.taskCard}>
                <Button      
                   title= {this.state.arr[i].name}
                   color= "gray"
                   onPress={() => { 
                      navigate('Edit_Accomplishments', { name: firstName, accomplishment: accomplishment, 
                                goalID: this.state.goalID, accID: accID,});             
                  }}
                />
              </View>
            </View>  
          );  
        } 
      }
      return views;
    } 
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>      
          <View>
            {renderTasks()}
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
  imageStyle: {
    backgroundColor: '#03a9f4',
    width: 207,
    height: 210,
    margin: 15,
    marginBottom: 50,
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