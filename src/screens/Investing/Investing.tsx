import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native'

import { MOCK_FOLLOWING } from '../../utils/data'

import { styles } from './styles'

export type InvestingScreenParams = undefined

export class Investing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Investing</Text>
        <View style={styles.portfolio}>
          <Text style={styles.portfolioText}>Version: v0.0.1</Text>
          <Text style={styles.portfolioText}>Account No. 987254</Text>
          <Text style={styles.portfolioText}>Total Investments: $330,000</Text>
          <Text style={styles.listTitle}>My Investments:</Text>
          <View style={styles.investmentsList}>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.listItemAbv}>{MOCK_FOLLOWING[0].abv}</Text>
                <Text style={styles.listItemTitle}>{MOCK_FOLLOWING[0].name}</Text>
              </View>
              <View>
                <Text style={styles.amountText}>Amount Invested: 3 Bitcoin</Text>
              </View>
              <View style={styles.listLikesContainer}>
                <Text style={styles.listLikes}>{MOCK_FOLLOWING[0].likes}k</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.listItemAbv}>{MOCK_FOLLOWING[5].abv}</Text>
                <Text style={styles.listItemTitle}>{MOCK_FOLLOWING[5].name}</Text>
              </View>
              <View>
                <Text style={styles.amountText}>Amount Invested: $850</Text>
              </View>
              <View style={styles.listLikesContainer}>
                <Text style={styles.listLikes}>{MOCK_FOLLOWING[5].likes}k</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.listItemAbv}>{MOCK_FOLLOWING[2].abv}</Text>
                <Text style={styles.listItemTitle}>{MOCK_FOLLOWING[2].name}</Text>
              </View>
              <View>
                <Text style={styles.amountText}>Amount Invested: $50</Text>
              </View>
              <View style={styles.listLikesContainer}>
                <Text style={styles.listLikes}>{MOCK_FOLLOWING[2].likes}k</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.portfolioText}>Investor Rating: 4.7</Text>
            <Text style={styles.portfolioText}>Current Funds: $1,573</Text>
            <Text style={styles.portfolioText}>Investing Limit: $5,000</Text>
            <Text style={styles.portfolioText}>Pending Deposits: $1,000</Text>
            <Text style={styles.portfolioText}>Crypto Balance: 5 Bitcoin/3000 Dogecoin</Text>
          </View>
        </View>
      </View>
    )
  }
}
