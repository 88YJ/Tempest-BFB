import React, { Component } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { GLOBAL } from '../utils/Constants'
import { styles } from './DeckCounterStyles'

interface DeckCounterProps {
  slideCount: number
  currentSlide: number
  style?: StyleProp<ViewStyle>
}

export class DeckCounter extends Component<DeckCounterProps> {
  render() {
    return <View style={styles.deckCounterContainerStyles}>{this.renderDeckCounter()}</View>
  }

  renderDeckCounter = () => {
    let counter = []
    for (var i = 0; i < this.props.slideCount; i++) {
      counter.push(
        <View
          key={i}
          style={[
            styles.deckCounterStyles,
            { width: GLOBAL.WINDOW_WIDTH / (this.props.slideCount + 1) },
            { backgroundColor: i === this.props.currentSlide ? 'white' : 'grey' },
            this.props.style,
          ]}
        />,
      )
    }

    return counter
  }
}
