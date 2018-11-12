import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../services/Token';
import { serverDelete, serverPost } from '../services/Fetch';

// This is Edit_Accomplishments page. Users edit the tasks they have finished. 
// It gets the accomplishment,accID and goalID param from View_Accomplishments.js, 
// and then use them to hit 'goals/goalID/completed_tasks/accID endpoint to delete
// whichever task the users wish to delete

class Edit_Accomplishments extends Component {
  constructor(props){
     super(props);
     this.state = {
        accomplishment: this.props.navigation.getParam('accomplishment', 'noaccomplishment'),
        goalID: this.props.navigation.getParam('goalID', 'noID'),
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const accID = this.props.navigation.getParam('accID', 'noID');
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Edit your accomplishment here! </Text> 
          <View
            style={styles.line}
          /> 
          <Text style={styles.actionText}> {this.state.accomplishment} </Text> 
          <View style={styles.button}>
            <Button 
              title= "Delete"
              color= "#ffffff"       
              onPress={() => {
                retrieveToken()
                  .then((token) => {
                    serverDelete('goals/' + this.state.goalID + '/completed_tasks/' + accID, token)
                    navigate('Dashboard', { name: firstName})
                  });          
            }}
            />
          </View> 
          <View style={styles.button}>
            <Button 
              title= "Back"
              color= "#ffffff"       
              onPress={() => {
                  navigate('Dashboard', { name: firstName});
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
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
    fontFamily: 'AvenirNext-HeavyItalic',
    textAlign: 'center'
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 20,
    marginLeft: 40,
  },

  
});

export default Edit_Accomplishments;
