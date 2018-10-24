import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';

class Dashboard extends Component {
  constructor(props){
     super(props);
     this.state = {       
        summary: '',
        arr: '',
     }
  }


  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const actions = this.props.navigation.getParam('actions', 'nothing');
    const goalType = this.props.navigation.getParam('goalType', 'Rip');
    const newGoal = this.props.navigation.getParam('newGoal', false);
    this.state.count = 1;
    this.state.summary = '';

  
    retrieveToken()
      .then((token) => {
        serverGet('goals', token)
          .then((res) => {
            this.setState({arr: res})
        });
      });

    console.log(this.state.arr);
    console.log(this.state.arr[0]);
    
    for (let i = 0; i < 5; i++) {
      if (actions[i] != '') {
        this.state.summary+= "\n" + this.state.count.toString() + '. ' + actions[i];
        this.state.count++;
      } 
    }
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Welcome, {firstName}!
        </Text> 
        {newGoal &&
          <Text style={styles.actionText}>  To accomplish your new {goalType} goal, you will: {this.state.summary} </Text> 
        }       
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
                navigate('Set_Goal');
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