import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../../components/Logo';
import { serverGet } from '../../services/Fetch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../../services/Token';
import CheckBox from 'react-native-check-box';

class Mentee_Accomplishments extends Component {
  constructor(props) {
    super(props);
    this.state = {      
        mentee_email: this.props.navigation.getParam('mentee_email', 'no_email'),
        mentee_goals: '',
     }
    retrieveToken()
      .then((token) => {
        serverGet('goals/', token)
          .then((res) => {
            this.setState({mentee_goals: res[this.state.mentee_email]})
        });
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const mentee = this.props.navigation.getParam('mentee', 'GuitarBob99');
    const renderGoals = () => {
      const views = []; 
      for ( var i = 0; i < this.state.mentee_goals.length; i++){
          const goalID = this.state.mentee_goals[i].id;
          const goalType = this.state.mentee_goals[i].category;
          views.push(
            <View style={styles.taskCard} key={this.state.mentee_goals[i].category} >
              <Button      
                 title= {this.state.mentee_goals[i].category}
                 color="gray"
                 onPress={() => {
                    navigate('Done_Tasks', { name: firstName, mentee: mentee, goalID: goalID, 
                      goalType: goalType, ismentor: true});
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
          <Text style={styles.titleText2}> Here are {mentee}'s goals! </Text>
          {renderGoals()}
          <View style={styles.button}>  
                <Button
                      title= "Back"
                      color='white'
                      fontSize = '30'
                      onPress={() => {
                        navigate('Dashboard', {name: firstName, ismentor: true});
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
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 10,
    marginBottom: 10,
    alignItems:'center', 
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
  
});

export default Mentee_Accomplishments;
