import React, { Component } from 'react'
import { Text, View, TextInput, Image, ScrollView } from 'react-native'

import { styles } from './styles'

export type SearchScreenParams = undefined

export class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Browse</Text>
        <TextInput style={styles.textInput} placeholder={'Search Companies'} />
        <ScrollView style={styles.newsContainer}>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>New Startups Changing the world</Text>
            <Image
              style={styles.newsImage}
              source={{ uri: 'https://www.bbva.com/wp-content/uploads/2020/05/Startups_post_COVID19-1024x629.png' }}
            />
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>Invest with Crypto!</Text>
            <Image
              style={styles.newsImage}
              source={{
                uri: 'https://assets.losspreventionmedia.com/uploads/2019/08/cryptocurrency-bitcoin-1280x720.jpg',
              }}
            />
          </View>
          <View style={styles.newsItem}>
            <Text style={styles.newsText}>How new ideas like tiktok are changing the world</Text>
            <Image
              style={styles.newsImage}
              source={{
                uri: 'https://www.rollingstone.com/wp-content/uploads/2019/08/tiktok.jpg?resize=1800,1200&w=1800',
              }}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
