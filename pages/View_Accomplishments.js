import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import CheckBox from 'react-native-check-box'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
    const actions = this.props.navigation.getParam('actions', 'nothing');  
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
             color="#ffffff"
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
          <Text style={styles.titleText}> Hi {firstName},</Text>
          <Text style={styles.titleText}> Here's your accomplishments! </Text> 
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
  },
  titleText: {
    fontSize: 50,     
    color: '#ffffff', 
    marginLeft: 20,
    textAlign: 'center'
  },
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
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
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
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

export default View_Accomplishments;
