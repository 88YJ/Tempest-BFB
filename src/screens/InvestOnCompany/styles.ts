import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../utils/Constants'

export const styles = StyleSheet.create({
  baseViewStyles: {
    backgroundColor: 'black',
    marginBottom: 60,
    marginTop: 60,
  },
  imageContainerStyles: {
    height: GLOBAL.WINDOW_HEIGHT - 120,
    width: '100%',
    paddingBottom: 10,
  },
  imageStyles: {
    flex: 1,
    resizeMode: 'cover',
  },
  teamMembers: {
    padding: 10,
    flexDirection: 'row',
  },
  highlightsContainer: {
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  countDownContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  countDownTextStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 5,
    textAlign: 'center',
  },
  companyTextStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 10,
  },
  normTextStyles: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  normGreyTextStyles: {
    color: 'grey',
    fontSize: 20,
    padding: 10,
  },
  companyNameTextStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    textAlignVertical: 'center',
  },
  headTextStyles: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 10,
    //textDecorationColor: '#D6A94A',
  },
  likeCountStyles: {
    fontSize: 32,
    color: 'white',
    paddingLeft: 10,
  },
  descriptionTextStyles: {
    color: 'white',
    textAlign: 'justify',
    lineHeight: 25,
    fontSize: 20,
    padding: 10,
  },
  backIconContainerStyles: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    backgroundColor: 'black',
    top: 0,
    padding: 10,
    height: 60,
  },
  backIconStyles: {
    zIndex: 1000,
    color: 'white',
  },
  slideStyles: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  buttonContainerStyles: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    height: 60,
    borderRadius: 0,
  },
  buttonText: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 0,
    marginLeft: 5,
    marginRight: 5,
    textAlignVertical: 'center',
  },
  barChart: {
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  pageStats: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  stats: {
    padding: 8,
  },
  statsText: {
    fontSize: 17,
    color: 'white',
  },
  statsText2: {
    fontSize: 17,
    color: 'grey',
  },
})
