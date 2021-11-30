import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../utils/Constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: GLOBAL.SCREEN_HEIGHT,
    backgroundColor: 'black',
    padding: 15,
  },
  followItem: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#384D48',
  },
  followItemTitle: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    width: 50,
    flex: 1,
  },
  followItemAbv: {
    color: '#66fcf1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  followGraphContainer: {
    width: 200,
  },
  followLikesContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#66fcf1',
    height: 40,
    alignItems: 'center',
  },
  followLikes: {
    color: 'black',
    fontSize: 15,
    padding: 10,
  },
})

export default styles
