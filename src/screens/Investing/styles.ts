import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../utils/Constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  pageTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  portfolio: {
    margin: 30,
  },
  listTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  portfolioText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  amountText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: 200,
  },
  investmentsList: {},
  listItem: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#384D48',
  },
  listItemTitle: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    width: 50,
    flex: 1,
  },
  listItemAbv: {
    color: '#66fcf1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listLikesContainer: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#66fcf1',
    height: 50,
  },
  listLikes: {
    color: 'black',
    fontSize: 15,
    margin: 15,
  },
})
