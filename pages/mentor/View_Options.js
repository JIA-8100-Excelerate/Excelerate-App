import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../../components/Logo';
import { serverPut } from '../../services/Fetch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../../services/Token';
import CheckBox from 'react-native-check-box';


class View_Options extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const mentee = this.props.navigation.getParam('mentee', 'GuitarBob99');
    const mentee_email = this.props.navigation.getParam('mentee_email', 'no email');
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> View {mentee}'s goals or accomplishments! </Text> 
          <View style={styles.taskCard}>
            <Button      
                 title= "View Mentee's Goals"
                 color= "gray"
                 onPress={() => { 
                    navigate("Mentee_Goals", {name: firstName, mentee: mentee, mentee_email: mentee_email });          
                }}
              />
          </View>
          <View style={styles.taskCard}>
            <Button      
                 title= "View Mentee's Accomplishments"
                 color= "gray"
                 onPress={() => { 
                    navigate("Mentee_Accomplishments", {name: firstName, mentee: mentee, mentee_email: mentee_email });          
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
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  titleText1: {
    fontSize: 40,     
    color: '#ffffff', 
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
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

export default View_Options;
