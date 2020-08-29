import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text
} from 'react-native';
import layout from '../layout';


export default class Card extends Component {
  render() {
    return (
      <ImageBackground
        source={this.props.data.picture}
        resizeMode='contain'
        style={styles.image}
      >
        <View style={styles.main}>
          <View style={styles.banner}>
            <Text style={styles.name}>
              {this.props.data.name}
            </Text>

            <Text style={styles.desc}>
              {this.props.data.description}
            </Text>
          </View>
        </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({
  main: {
    width: 320,
    height: 480,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 480,
  },
  banner: {
    height: 80,
    width: 320,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  name: {
    fontSize: 22,
    color: '#fff',
    fontFamily: "Helvetica",
    fontWeight: "bold"
  },
  desc: {
    fontSize: 10,
    color: '#fff',
    fontFamily: "Helvetica",
  },
})