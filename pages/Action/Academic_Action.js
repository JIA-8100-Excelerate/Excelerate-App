import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box'

class Academic_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        weekSchedulingChecked: false,
        meetWithAdvisorChecked: false,
        talkToProfessorChecked: false,
        studyWithFriendChecked: false,
        customizedAction: '',
        
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
 
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Hi {firstName},</Text>
        <Text style={styles.titleText}> Let's Set a Goal! </Text> 
        <View
          style={styles.line}
        /> 
        <Text style={styles.actionText}> What Action will your take for your ACADEMIC goal? </Text>

        <CheckBox 
          style={{marginLeft: 40, marginTop: 20}}
          onClick={()=>{
              this.setState({
                   weekSchedulingChecked:!this.state.weekSchedulingChecked
               })
             }} 
          isChecked={this.state.weekSchedulingChecked} 
          rightText={"Schedule your week"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        /> 
       <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   talkToProfessorChecked:!this.state.talkToProfessorChecked
               })
             }} 
          isChecked={this.state.talkToProfessorChecked} 
          rightText={"Talk to one professor"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        /> 
       <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   meetWithAdvisorChecked:!this.state.meetWithAdvisorChecked
               })
             }} 
          isChecked={this.state.meetWithAdvisorChecked} 
          rightText={"Meet with Advisor"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        />

        <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   studyWithFriendChecked:!this.state.studyWithFriendChecked
               })
             }} 
          isChecked={this.state.studyWithFriendChecked} 
          rightText={"Study with friends"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        />  

        <TextInput
          onChangeText={(value) => this.setState({customizedAction: value})}
          style={styles.inputBox}
          placeholder="Customize your Action here!"
          placeholderTextColor="white"
        />
        <View style={styles.button}>
          <Button
                title= "Next"
                color='#ffffff'
                onPress={() => {
                  this.state.goalAction =['','','','',''];
                  if (this.state.weekSchedulingChecked || this.state.talkToProfessorChecked || this.state.meetWithAdvisorChecked
                    || this.state.studyWithFriendChecked || this.state.customizedAction!='') {
                    if (this.state.weekSchedulingChecked) {
                      this.state.goalAction[0]='schedule your week '
                    } 
                    if (this.state.talkToProfessorChecked) {
                      this.state.goalAction[1]='talk to one professor '
                    } 
                    if (this.state.meetWithAdvisorChecked) {
                      this.state.goalAction[2]='meet with Advisor '
                    } 
                    if (this.state.studyWithFriendChecked) {
                      this.state.goalAction[3]='study with friends '
                    }
                    if (this.state.customizedAction!='') {
                      this.state.goalAction[4]= customizedAction
                    }
                    navigate('Goal_Summary', { name: firstName, actions: this.state.goalAction, goalType: 'Academic'});
                  } else {
                    Alert.alert('Please set your actions')
                  }
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
  },
  titleText: {
    fontSize: 50,     
    color: '#ffffff',
    alignItems:'center', 
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
    paddingHorizontal: 16,
    color: '#ffffff'
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 10,
    marginLeft: 40,
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Academic_Action;
