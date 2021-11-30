import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  deckCounterContainerStyles: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  deckCounterStyles: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    height: 5,
    zIndex: 1000,
  },
})
