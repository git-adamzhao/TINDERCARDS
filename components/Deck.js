import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CardFront from './CardFront';
import CardBack from './CardBack';
import SwipeCards from 'react-native-swipe-cards'; 

import CardFlip from 'react-native-card-flip';
import {TouchableOpacity} from 'react-native';

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
        renderCard={(cardData) => <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><CardFront data={cardData} /></TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><CardBack data={cardData} /></TouchableOpacity>
      </CardFlip>}
        //renderCard={(cardData) => <Card data={cardData} />}
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
  },
  cardContainer: {
    width: 300,
    height: 400,
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.5,
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})

const cards = [
  {
    name: 'MOONLIGHT',
    picture: require('../assets/1.jpeg'),
    description: "123"
  },
  {
    name: 'Evan Bacon',
    picture: require('../assets/ExpoHollow.png'),
    description: "456"
  },
  {
    name: 'Jesse Ruder',
    picture: require('../assets/ExpoBlack.png'),
    description: "134"
  },
  {
    name: 'Brent Vatne',
    picture: require('../assets/ExpoHollow.png'),
    description: "123"
  },
  {
    name: 'James Ide',
    picture: require('../assets/ExpoBlack.png'),
    description: "123"
  },
]
