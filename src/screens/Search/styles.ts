import { StyleSheet } from 'react-native'

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
  textInput: {
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  newsContainer: {},
  newsItem: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    height: 400,
    margin: 15,
    padding: 10,
  },
  newsImage: {
    flex: 1,
    borderRadius: 10,
  },
  newsText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    margin: 10,
  },
})
