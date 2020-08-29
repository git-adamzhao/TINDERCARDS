import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import layout from '../layout';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.main}> 
        <Text style={styles.name}>
          {this.props.data.name}
        </Text>
        <Text style={styles.name}>
          {this.props.data.description}
        </Text>    
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: 320,
    height: 470,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 470,
  },
  name: {
    fontSize: 22,
    color: '#fff'
  }
})