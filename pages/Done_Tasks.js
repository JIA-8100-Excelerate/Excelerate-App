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
      for ( var i =0; i< this.state.arr.length; i++){
        const accomplishment = this.state.arr[i].name;
        const accID = this.state.arr[i].id;
        views.push(
          <View style={styles.taskCard} key={this.state.arr[i].id} >
            <Button      
               title= {this.state.arr[i].name}
               color= "gray"
               onPress={() => { 
                  navigate('Edit_Accomplishments', { name: firstName, accomplishment: accomplishment, 
                            goalID: this.state.goalID, accID: accID});             
              }}
            />
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
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    fontFamily: 'AvenirNext-HeavyItalic',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
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