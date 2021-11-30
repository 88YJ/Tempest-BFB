import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

import styles from './styles'
import { MOCK_FOLLOWING } from '../../utils/data'

import CountDown from 'react-native-countdown-component'

export type FollowingScreenParams = undefined

const chartConfig = {
  backgroundGradientFrom: '#1e2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => '#d3d3d3',
  strokeWidth: 2,
  barPercentage: 0.5,
}

export class Following extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {MOCK_FOLLOWING.map(item => {
          return (
            <View key={item.id} style={styles.followItem}>
              <View>
                <Text style={styles.followItemAbv}>{item.abv}</Text>
                <Text style={styles.followItemTitle}>{item.name}</Text>
              </View>
              <View style={styles.followGraphContainer}>
                <LineChart data={item.data} width={200} height={70} chartConfig={chartConfig} fromZero={true} />
              </View>
              <View style={styles.followLikesContainer}>
                <Text style={styles.followLikes}>{item.likes}k</Text>
                <CountDown
                  // onFinish={() => console.log('finished')}
                  // onPress={() => console.log('hello')}
                  size={10}
                  until={Math.random() * 200000}
                  digitStyle={{ backgroundColor: 'black', borderColor: 'teal', borderWidth: 2 }}
                  digitTxtStyle={{ color: 'white' }}
                  timeLabelStyle={{ color: 'grey' }}
                  timeToShow={['H', 'D']}
                  timeLabels={{ d: 'D', h: 'H' }}
                />
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}
