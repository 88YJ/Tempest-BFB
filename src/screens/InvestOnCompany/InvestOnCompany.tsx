import React, { Component } from 'react'
import { GLOBAL } from '../../utils/Constants'
import { Text, View, Image, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Ionicons from 'react-native-vector-icons/Ionicons'

import { ViewNames } from '../../navigation/ViewNames'
import { MainNavigationProp, MainRouteProp } from '../../navigation/RootNavigator'
import { Card } from '../../models/Card'
import { styles } from './styles'
import { NumberConvertor } from '../../utils/CardUtils'
import { PrimaryButton } from '../../components/PrimaryButton'
import { Modal } from '../../components/Modal'
import { TextInput } from '../../components/TextInput'

import CountDown from 'react-native-countdown-component'
import { BarChart } from 'react-native-chart-kit'

export interface InvestOnCompanyScreenParams {
  card: Card
}

interface InvestOnCompanyProps {
  navigation: MainNavigationProp<ViewNames.InvestOnCompany>
  route: MainRouteProp<ViewNames.InvestOnCompany>
}

interface InvestOnCompanyState {
  displayModal: boolean
}

const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientFromOpacity: 0.7,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 1,
  fillShadowGradient: 'teal',
  fillShadowGradientOpacity: 1,
  color: (opacity = 1) => '#d3d3d3',
  barPercentage: 2,
}

const data = {
  labels: ['1', '2', '3'],
  datasets: [
    {
      color: (opacity = 1) => 'gold',
      data: [2.3, 5, 10],
    },
  ],
}

export class InvestOnCompany extends Component<InvestOnCompanyProps, InvestOnCompanyState> {
  state: InvestOnCompanyState = {
    displayModal: false,
  }

  render() {
    const { card } = this.props.route.params
    if (card === undefined) {
      return
    }

    return (
      <View>
        <View style={styles.backIconContainerStyles}>
          <Pressable style={{ width: '10%' }} onPress={this.handleBackButtonPressed}>
            <Ionicons style={styles.backIconStyles} name={'chevron-back-circle-outline'} size={40} />
          </Pressable>
          <Text style={styles.companyNameTextStyles}>{card.name}</Text>
        </View>

        <Modal visible={this.state.displayModal} onRequestClose={this.handleCloseModalRequest} title={card.name}>
          <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
            <TextInput keyboardType="numeric" placeholder="$" style={{ width: '45%', marginRight: '5%' }} />
            <TextInput keyboardType="numeric" placeholder="%" style={{ width: '45%', marginLeft: '5%' }} />
          </View>
          <PrimaryButton text="Invest" margin={10} onPress={this.handleCloseModalRequest} />
          <PrimaryButton text="Cancel" margin={10} onPress={this.handleCloseModalRequest} />
        </Modal>

        <ScrollView style={styles.baseViewStyles}>
          {card.deck?.items?.length !== undefined && (
            <View style={styles.slideStyles}>
              <View style={styles.imageContainerStyles}>
                <Image style={styles.imageStyles} source={{ uri: card.deck.items[0]?.imageUri }} />
              </View>
              <Text style={styles.descriptionTextStyles}>{card.slogan}</Text>
            </View>
          )}

          <View style={styles.pageStats}>
            <View style={styles.stats}>
              <Text style={styles.statsText}>$2,764,593</Text>
              <Text style={styles.statsText2}>Amount Raised</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statsText}>746</Text>
              <Text style={styles.statsText2}>Total Investors</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statsText}>$10</Text>
              <Text style={styles.statsText2}>Current Share Price</Text>
            </View>
          </View>
          <View style={styles.countDownContainer}>
            <Text style={styles.countDownTextStyles}>Ignition in T minus</Text>
            <CountDown
              size={40}
              until={Math.random() * 200000}
              digitStyle={{ backgroundColor: 'black', borderColor: 'teal', borderWidth: 2 }}
              digitTxtStyle={{ color: 'white' }}
              timeLabelStyle={{ color: 'grey' }}
              timeToShow={['M', 'S', 'H', 'D']}
              timeLabels={{ m: 'M', s: 'S', d: 'D', h: 'H' }}
            />
          </View>
          <View style={styles.barChart}>
            <Text style={styles.countDownTextStyles}>Investment Stages</Text>
            <BarChart
              withInnerLines={false}
              fromZero={true}
              yAxisLabel="$"
              showValuesOnTopOfBars={true}
              data={data}
              width={GLOBAL.SCREEN_WIDTH}
              height={200}
              chartConfig={chartConfig}
            />
          </View>
          <View style={styles.highlightsContainer}>
            <View>
              <Text style={styles.headTextStyles}>Fund Highlights</Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Total Amount Raised:</Text> US $2,764,593
              </Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Total Round Size:</Text> US $10,000,000
              </Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Pre-Money valuation:</Text> US 25,000,000
              </Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Total Investors:</Text> 746
              </Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Total Likes:</Text>{' '}
                {NumberConvertor.toLetterNotation(card.likes)}
              </Text>
              <Text style={styles.normTextStyles}>
                <Text style={styles.normGreyTextStyles}>Raise Description:</Text> Series A-1
              </Text>
            </View>
            <View>
              <Text style={styles.headTextStyles}>Company Highlights</Text>
              <Text style={styles.normTextStyles}>CEO holds 37 patents and was also among the founders of Clutch</Text>
              <Text style={styles.normTextStyles}>Since launch in 2019, achieved over $5m in total sales</Text>
              <Text style={styles.normTextStyles}>Over $3.8M raised to date from noted angel groups such as ATI</Text>
            </View>
          </View>

          {card.team?.items && (
            <View>
              <Text style={styles.companyTextStyles}>Meet the Team</Text>
              {card.team?.items?.map((member, i) => {
                return (
                  <View key={i} style={styles.teamMembers}>
                    <Image
                      style={{
                        width: 150,
                        height: 150,
                        borderRadius: 75,
                        borderWidth: 2,
                        borderColor: 'white',
                        alignSelf: 'flex-start',
                      }}
                      source={{
                        uri: member?.imageUri,
                      }}
                    />

                    <View style={{ padding: 20 }}>
                      <Text style={styles.descriptionTextStyles}>{member?.name}</Text>
                      <Text style={styles.descriptionTextStyles}>{member?.position}</Text>
                      <Text style={styles.descriptionTextStyles}>{member?.linkedIn}</Text>
                    </View>
                  </View>
                )
              })}
            </View>
          )}
        </ScrollView>

        <PrimaryButton
          style={styles.buttonContainerStyles}
          onPress={this.handleInvestButtonClicked}
          text="Invest"
          color="#66fcf1"
          pressedColor="grey"
        />
      </View>
    )
  }

  handleBackButtonPressed = () => {
    this.props.navigation.goBack()
  }

  handleInvestButtonClicked = () => {
    this.setState({ displayModal: true })
  }

  handleCloseModalRequest = () => {
    this.setState({ displayModal: false })
  }
}
