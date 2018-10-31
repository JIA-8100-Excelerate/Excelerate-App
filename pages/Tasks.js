import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    console.log("Doggo");
    console.log(this.state.arr);
    const renderTasks = () => {
      const views = []; 
      for ( var i =0; i< this.state.arr.length; i++){
      const done = this.state.arr[i].done;
      const task = this.state.arr[i].name;
      const num = this.state.arr.length;
       views.push(
        <View style={styles.button} key={this.state.arr[i].id} >
          <Button      
             title= {this.state.arr[i].name}
             color="#ffffff"
             onPress={() => {
                navigate('Edit_Tasks', { name: firstName, done: done, task: task}, num: num);
          }}
          />
        </View>);
      }
      return views;
    } 
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Welcome, {firstName}, this is task page!
          </Text>   
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
  headerText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 50
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



export default  Tasks;