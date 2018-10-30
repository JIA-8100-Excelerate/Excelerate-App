import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Edit_Tasks extends Component {
  constructor(props){
     super(props);
     this.state = {
        taskName: this.props.navigation.getParam('task', 'notask'),
        taskDone: this.props.navigation.getParam('done', 'notaskDone'),
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
 
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText}> Hi {firstName},</Text>
          <Text style={styles.headerText}> Edit your task here! </Text> 
          <View
            style={styles.line}
          /> 
          <CheckBox 
            style={{marginLeft: 40, marginTop: 20}}
            onClick={()=>{
                this.setState({
                     taskDone:!this.state.taskDone
                 })
               }} 
            isChecked={this.state.taskDone} 
            rightText={this.state.taskName}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          /> 
          <View style={styles.button}>
            <Button 
              title= "Submit"
              color= "#ffffff"       
              onPress={() => {
                if (this.state.taskDone) {
                  Alert.alert("Good job!");
                  navigate('Dashboard', { name: firstName});
                } else {
                  Alert.alert("Please check task!")
                }           
            }}
            />
                }
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
  titleText: {
    fontSize: 50,     
    color: '#ffffff',
    alignItems:'center', 
  },
  headerText: {
    fontSize: 30,     
    color: '#ffffff',
    alignItems:'center', 
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
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Edit_Tasks;
