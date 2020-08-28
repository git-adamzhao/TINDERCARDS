import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Card from './Card';
import SwipeCards from 'react-native-swipe-cards'; // 0.1.1

export default class Deck extends Component {

  renderEmpty() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No Cards Left!
        </Text>
      </View>
    )
  }

  handleYup (card) {
    console.log(`Yup for ${card.name}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.name}`)
  }

  render() {
    return (
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <Card data={cardData} />}
        renderNoMoreCards={this.renderEmpty}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontSize: 24,
  }
})

const cards = [
  {
    name: 'Charlie Cheever',
    picture: require('../assets/ExpoBlack.png')
  },
  {
    name: 'Evan Bacon',
    picture: require('../assets/ExpoHollow.png')
  },
  {
    name: 'Jesse Ruder',
    picture: require('../assets/ExpoBlack.png')
  },
  {
    name: 'Brent Vatne',
    picture: require('../assets/ExpoHollow.png')
  },
  {
    name: 'James Ide',
    picture: require('../assets/ExpoBlack.png')
  },
]
