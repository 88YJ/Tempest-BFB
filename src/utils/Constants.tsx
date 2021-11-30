import { Dimensions } from 'react-native'

export const GLOBAL = {
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGHT: Dimensions.get('window').height,
}
