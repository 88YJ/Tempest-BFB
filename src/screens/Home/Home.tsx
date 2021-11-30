import React, { Component } from 'react'
import { Text, View, Image, Animated, PanResponder, BackHandler } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { MOCK_CARDS } from '../../utils/data'
import { GLOBAL } from '../../utils/Constants'
import { styles } from './styles'
import { ViewNames } from '../../navigation/ViewNames'
import { MainNavigationProp, MainRouteProp } from '../../navigation/RootNavigator'
import { DeckCounter } from '../../components/DeckCounter'
import { NumberConvertor, sortSlideByLocation } from '../../utils/CardUtils'
import { listCards } from '../../models/CustomQueries'
import { updateCard } from '../../graphql/mutations'
import { ListCardsQuery, UpdateCardMutation } from '../../API'
import { Card, CardConvertor } from '../../models/Card'
import { callGraphQL } from '../../models/CallGraphQL'

export type HomeScreenParams = undefined

interface HomeProps {
  navigation: MainNavigationProp<ViewNames.Home>
  route: MainRouteProp<ViewNames.Home>
}

interface HomeState {
  cards: Card[]
  currentCardIndex: number
  currentDeckSlideIndex: number
  expandInfo: boolean
}

export class Home extends Component<HomeProps, HomeState> {
  state: HomeState = {
    currentCardIndex: 0,
    currentDeckSlideIndex: 0,
    expandInfo: false,
    cards: [],
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleCloseInfoTouch)
    this.fetchCards()
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleCloseInfoTouch)
  }

  private position = new Animated.ValueXY()

  private panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onShouldBlockNativeResponder: () => false,

    onPanResponderMove: (event, gestureState) => {
      if (this.state.expandInfo === true) {
        return
      }

      this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
    },

    onPanResponderRelease: (event, gestureState) => {
      const { dx, dy, x0, y0 } = gestureState

      if ((dx < 10 && dx > -10 && dy < 10 && dy > -10) || this.state.expandInfo === true) {
        if (y0 > GLOBAL.WINDOW_HEIGHT - GLOBAL.WINDOW_HEIGHT / 5 && this.state.expandInfo === false) {
          this.handleExpandInfoTouch()
        } else if (dx < -10 || (x0 > GLOBAL.WINDOW_WIDTH / 2 && !(dx > 10))) {
          this.handleNextSlideTouch()
        } else if (dx > 10 || (x0 < GLOBAL.WINDOW_WIDTH / 2 && !(dx < -10))) {
          this.handlePreviousSlideTouch()
        }

        this.position.setValue({ x: 0, y: 0 })

        return
      }

      if (dy < -300) {
        Animated.spring(this.position, {
          toValue: { x: dx, y: -GLOBAL.WINDOW_HEIGHT - 100 },
          useNativeDriver: true,
        }).start(() => {
          this.position.setValue({ x: 0, y: 0 })
        })
        this.handleCardSwipeUp()
      } else if (dx > 120) {
        Animated.spring(this.position, {
          toValue: { x: GLOBAL.WINDOW_WIDTH + 100, y: dy },
          useNativeDriver: true,
        }).start(() => {
          this.handleCardSwipeRight()
          this.position.setValue({ x: 0, y: 0 })
        })
      } else if (dx < -120) {
        Animated.spring(this.position, {
          toValue: { x: -GLOBAL.WINDOW_WIDTH - 100, y: dy },
          useNativeDriver: true,
        }).start(() => {
          this.handleCardSwipeLeft()
          this.position.setValue({ x: 0, y: 0 })
        })
      } else {
        Animated.spring(this.position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: true,
        }).start()
      }
    },
  })

  private rotation = this.position.x.interpolate({
    inputRange: [-GLOBAL.WINDOW_WIDTH / 2, 0, GLOBAL.WINDOW_WIDTH / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  })

  private likeOpacity = this.position.x.interpolate({
    inputRange: [-GLOBAL.WINDOW_WIDTH / 2, 0, GLOBAL.WINDOW_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  })

  private nopeOpacity = this.position.x.interpolate({
    inputRange: [-GLOBAL.WINDOW_WIDTH / 2, 0, GLOBAL.WINDOW_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  })

  private investOpacity = this.position.y.interpolate({
    inputRange: [-GLOBAL.WINDOW_HEIGHT / 2, 0, GLOBAL.WINDOW_HEIGHT / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  })

  private nextCardOpacity = this.position.x.interpolate({
    inputRange: [-GLOBAL.WINDOW_WIDTH / 2, 0, GLOBAL.WINDOW_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  })

  private nextCardScale = this.position.x.interpolate({
    inputRange: [-GLOBAL.WINDOW_WIDTH / 2, 0, GLOBAL.WINDOW_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  })

  private rotateAndTranslate = {
    transform: [
      {
        rotate: this.rotation,
      },
      ...this.position.getTranslateTransform(),
    ],
  }

  render() {
    return (
      <View style={styles.baseViewStyles}>
        {this.state.cards
          .map((card, i) => {
            if (i < this.state.currentCardIndex || card?.deck?.items === null || card?.deck?.items === undefined) {
              return null
            }

            card.deck.items.sort(sortSlideByLocation)
            if (this.state.expandInfo === true && i === this.state.currentCardIndex) {
              return (
                <ScrollView style={styles.cardStyles} key={card.id}>
                  <Image
                    style={[styles.imageStyles, { height: GLOBAL.WINDOW_HEIGHT - 90 }]}
                    source={{
                      uri: card.deck.items[this.state.currentDeckSlideIndex]?.imageUri,
                    }}
                    {...this.panResponder.panHandlers}
                  />

                  <DeckCounter
                    currentSlide={this.state.currentDeckSlideIndex}
                    slideCount={card.deck.items.length}
                    style={{ left: 0, top: 5 }}
                  />

                  <View style={styles.backIconContainerStyles}>
                    <TouchableOpacity onPress={this.handleCloseInfoTouch}>
                      <Ionicons style={styles.backIconStyles} name={'chevron-up-circle-outline'} size={50} />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.companyTextStyles}>
                    {card.deck.items[this.state.currentDeckSlideIndex]?.title}
                  </Text>
                  <Text style={[styles.descriptionTextStyles, { marginBottom: 20 }]}>
                    {card.deck.items[this.state.currentDeckSlideIndex]?.description}
                  </Text>
                </ScrollView>
              )
            } else if (i === this.state.currentCardIndex) {
              return (
                <Animated.View
                  {...this.panResponder.panHandlers}
                  key={card.id}
                  style={[this.rotateAndTranslate, styles.cardStyles]}>
                  <Image
                    style={styles.imageStyles}
                    source={{
                      uri: card.deck.items[this.state.currentDeckSlideIndex]?.imageUri,
                    }}
                  />

                  <DeckCounter
                    currentSlide={this.state.currentDeckSlideIndex}
                    slideCount={card.deck.items.length}
                    style={{ left: 15, top: 20 }}
                  />

                  <View style={styles.cardInfoViewStyles}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.companyTextStyles}>{card.name}</Text>
                      <Text style={styles.likeCountStyles}>{NumberConvertor.toLetterNotation(card.likes)}</Text>
                    </View>
                    <Text style={styles.descriptionTextStyles}>{card.slogan}</Text>
                  </View>

                  <Animated.View style={[{ opacity: this.likeOpacity }, styles.likeViewStyles]}>
                    <Text style={styles.likeTextStyles}>LIKE</Text>
                  </Animated.View>
                  <Animated.View style={[{ opacity: this.investOpacity }, styles.investViewStyles]}>
                    <Text style={styles.investTextStyles}>INVEST</Text>
                  </Animated.View>
                  <Animated.View style={[{ opacity: this.nopeOpacity }, styles.nopeViewStyles]}>
                    <Text style={styles.nopeTextStyles}>NOPE</Text>
                  </Animated.View>
                </Animated.View>
              )
            } else {
              return (
                <Animated.View
                  {...this.panResponder.panHandlers}
                  key={card.id}
                  style={[
                    styles.cardStyles,
                    {
                      opacity: i === this.state.currentCardIndex + 1 ? this.nextCardOpacity : 0,
                      transform: [{ scale: this.nextCardScale }],
                    },
                  ]}>
                  <Image style={styles.imageStyles} source={{ uri: card.deck.items[0]?.imageUri }} />

                  <DeckCounter currentSlide={0} slideCount={card.deck.items.length} style={{ left: 15, top: 20 }} />

                  <View style={styles.cardInfoViewStyles}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.companyTextStyles}>{card.name}</Text>
                      <Text style={styles.likeCountStyles}>{NumberConvertor.toLetterNotation(card.likes)}</Text>
                    </View>
                    <Text style={styles.descriptionTextStyles}>{card.slogan}</Text>
                  </View>
                </Animated.View>
              )
            }
          })
          .reverse()}
      </View>
    )
  }

  fetchCards = async () => {
    try {
      // const response = await callGraphQL<ListCardsQuery>(listCards)
      // let cards = CardConvertor.fromGraphqlList(response)
      let cards = MOCK_CARDS
      this.setState({ cards: cards })
    } catch (error) {
      console.log(error)
    }
  }

  handleCardChange = () => {
    this.setState({ currentCardIndex: this.state.currentCardIndex + 1, currentDeckSlideIndex: 0, expandInfo: false })
  }

  handleCardSwipeUp = () => {
    this.props.navigation.navigate(ViewNames.InvestOnCompany, { card: this.state.cards[this.state.currentCardIndex] })
  }

  handleCardSwipeLeft = () => {
    let card = this.state.cards[this.state.currentCardIndex]
    if (card === undefined) {
      return
    }

    callGraphQL<UpdateCardMutation>(updateCard, { input: { id: card.id, nopes: card.nopes + 1 } }).catch(rejection => {
      console.log(rejection)
    })

    this.handleCardChange()
  }

  handleCardSwipeRight = () => {
    let card = this.state.cards[this.state.currentCardIndex]
    if (card === undefined) {
      return
    }

    callGraphQL<UpdateCardMutation>(updateCard, { input: { id: card.id, likes: card.likes + 1 } }).catch(rejection => {
      console.log(rejection)
    })

    this.handleCardChange()
  }

  handleNextSlideTouch = () => {
    let card = this.state.cards[this.state.currentCardIndex]

    if (card?.deck?.items?.length === undefined) {
      return
    } else if (this.state.currentDeckSlideIndex < card.deck.items.length - 1) {
      this.setState({ currentDeckSlideIndex: this.state.currentDeckSlideIndex + 1 })
    }
  }

  handlePreviousSlideTouch = () => {
    if (this.state.currentDeckSlideIndex > 0) {
      this.setState({ currentDeckSlideIndex: this.state.currentDeckSlideIndex - 1 })
    }
  }

  handleExpandInfoTouch = () => {
    this.setState({ expandInfo: true })
  }

  handleCloseInfoTouch = () => {
    if (this.state.expandInfo === false) {
      BackHandler.exitApp()
    } else {
      this.setState({ expandInfo: false })
    }

    return true
  }
}
