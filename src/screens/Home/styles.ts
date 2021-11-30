import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../utils/Constants'

export const styles = StyleSheet.create({
  baseViewStyles: {
    flex: 1,
    backgroundColor: 'black',
  },
  cardStyles: {
    height: '100%',
    width: '100%',
    padding: 15,
    paddingBottom: '5%',
    position: 'absolute',
  },
  imageStyles: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  likeViewStyles: {
    transform: [{ rotate: '-30deg' }],
    position: 'absolute',
    top: 50,
    left: 40,
    zIndex: 1000,
  },
  likeTextStyles: {
    borderWidth: 1,
    borderColor: 'green',
    color: 'green',
    fontSize: 32,
    fontWeight: '800',
    padding: 10,
  },
  investViewStyles: {
    position: 'absolute',
    bottom: 150,
    left: 120,
    zIndex: 1000,
  },
  investTextStyles: {
    borderWidth: 1,
    borderColor: 'blue',
    color: 'blue',
    fontSize: 46,
    fontWeight: '800',
    padding: 10,
  },
  nopeViewStyles: {
    transform: [{ rotate: '30deg' }],
    position: 'absolute',
    top: 50,
    right: 40,
    zIndex: 1000,
  },
  nopeTextStyles: {
    borderWidth: 1,
    borderColor: 'red',
    color: 'red',
    fontSize: 32,
    fontWeight: '800',
    padding: 10,
  },
  cardInfoViewStyles: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 25,
    paddingLeft: 20,
  },
  companyTextStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  likeCountStyles: {
    fontSize: 32,
    color: 'white',
    paddingLeft: 10,
  },
  descriptionTextStyles: {
    color: 'white',
    textAlign: 'justify',
    lineHeight: 22,
  },
  backIconContainerStyles: {
    position: 'absolute',
    top: GLOBAL.WINDOW_HEIGHT - 120,
    right: 10,
  },
  backIconStyles: {
    color: 'white',
    zIndex: 1000,
  },
})
