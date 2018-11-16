import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../../components/Logo';
import { serverPut } from '../../services/Fetch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../../services/Token';
import CheckBox from 'react-native-check-box';


class View_Mentees extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const mentees = this.props.navigation.getParam('mentees', 'GuitarBob99');
    const renderMentees = () => {
      const views = []; 
      for ( var i =0; i< mentees.length; i++){
        const mentee = mentees[i].name;
        const mentee_email = mentees[i].email;
          views.push(
          <View style={styles.taskCard} key={mentee_email} >
            <Button      
               title= {mentees[i].name }
               color= "gray"
               onPress={() => { 
                  navigate("Mentee_Goals", {name: firstName, mentee: mentee, mentee_email: mentee_email });          
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
          <Text style={styles.titleText2}> View your mentees! </Text>
          {renderMentees()}
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
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    justifyContent:'center',
  },
  buttonContainer: {
    alignItems:'center',
    justifyContent:'center',
 },   
});

export default View_Mentees;
