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
        <Image
          source={this.props.data.picture}
          resizeMode='contain'
          style={styles.image}
        />
        <View style={styles.banner}>
          <Text style={styles.name}>
            {this.props.data.name}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: layout.window.width - 40,
    height: layout.window.height / 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
  image: {
    width: layout.window.width - 40,
    height: (layout.window.height / 2) - 40,
  },
  banner: {
    height: 40,
    width: layout.window.width - 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 22,
    color: '#fff'
  }
})