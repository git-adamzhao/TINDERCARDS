import React from 'react';
import { StyleSheet, View } from 'react-native';
import Deck from './components/Deck';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './cacheAssetsAsync';
import "regenerator-runtime";

export default class App extends React.Component {
  state = {
    assetsLoaded: false
  }

  componentDidMount() {
    this.loadAssetsAsync()
  }
  
  async loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/ExpoBlack.png'),
          require('./assets/ExpoHollow.png')
        ]
      });
    } catch(e) {
      console.log(e.toString())
    } finally {
      this.setState({ assetsLoaded: true })
    }
  }

  render() {
    if (!this.state.assetsLoaded) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <Deck />
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
