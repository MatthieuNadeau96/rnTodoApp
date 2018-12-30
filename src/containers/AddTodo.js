/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

class AddTodo extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', marginHorizontal: 20}}>
        <TextInput
          placeholder="Enter Text here"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={()=>alert('added todo')}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5
  },
  buttonView: {
    height: 50,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#de9595',
    padding: 10
  }
});
