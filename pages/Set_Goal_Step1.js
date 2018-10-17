import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-checkbox';

class Set_Goal_Step1 extends Component {
    constructor(props){
     super(props);

     this.state = {
        socialChecked: false,
        physicalChecked: false,
        academicChecked: false,
        cookingChecked: false,
        careerChecked: false,
     }
  }
   render() {
    const name = this.props.navigation.getParam('name', 'BOB');
    console.log(name);
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Hi {name},</Text>
        <Text style={styles.titleText}> Let's Set a Goal! </Text> 
        <View
          style={styles.line}
        /> 
        <CheckBox rightTextStyle={styles.titleText}
          style={{color: 'red', fontSize: 40}}
          label='Social'
          checked={this.state.checked}
          onChange={(value) => this.setState({socialChecked: !value})}
        />
        <CheckBox 
          label='Physical'
          checked={this.state.checked}
          onChange={(value) => this.setState({physicalChecked: !value})}
        />
        <CheckBox 
          label='Academic'
          checked={this.state.checked}
          onChange={(value) => this.setState({academicChecked: !value})}
        />
        <CheckBox 
          label='Cooking'
          checked={this.state.checked}
          onChange={(value) => this.setState({cookingChecked: !value})}
        />
        <CheckBox    
          label='Career'
          checked={this.state.checked}
          onChange={(value) => this.setState({careerChecked: !value})}
        />
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
  },
  box: {
    marginTop: 50,
    padding: '50'
  }
  
});

export default Set_Goal_Step1;