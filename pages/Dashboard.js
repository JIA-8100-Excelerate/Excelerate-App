import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';

class Dashboard extends Component {
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
    const goalType = this.props.navigation.getParam('goalType', 'Rip');  

    const renderButtons = () => {
      const views = []; 
      for ( var i =0; i< this.state.arr.length; i++){
      const tasks = this.state.arr[i].tasks;
      const goalID = this.state.arr[i].id;
       views.push(
        <View style={styles.button} key={this.state.arr[i].category} >
          <Button      
             title= {this.state.arr[i].category}
             color="#ffffff"
             onPress={() => {
                navigate('Tasks', { name: firstName, tasks: tasks, goalID: goalID});
          }}
          />
        </View>);
      }
      return views;

    } 
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Welcome, {firstName}!
        </Text> 
        <View>
          {renderButtons()}
        </View>
        <Text style={styles.headerText}>
          {this.state.category}
        </Text>    
        <View style={styles.button}>
          <Button 
            title= "Set a New Goal"
            color= "#ffffff"       
            onPress={() => {
                navigate('Set_Goal', { name: firstName});
          }}
            />
        </View>
        <View style={styles.button}>
          <Button
            title= "View My Goals"
            color= "#ffffff"
            onPress={() => {
                navigate('View_Goals', {name: firstName});
          }}
            />
          </View>
        <View style={styles.button}>
          <Button
            title= "View My Accomplishments"
            color= "#ffffff"
            onPress={() => {
                navigate('Set_Goal');
            }}
          />
        </View>  
        <View style={styles.button}>  
          <Button
                title= "Logout"
                color='#ffffff'
                fontSize = '30'
                onPress={() => {
                  navigate('Login');
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
    alignItems:'center',
    justifyContent:'center'
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



export default  Dashboard;