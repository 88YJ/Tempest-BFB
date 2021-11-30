import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import { RootNavigator } from './src/navigation/RootNavigator'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.safeArea}>
        <RootNavigator />
      </SafeAreaView>
    </>
  )
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
})
