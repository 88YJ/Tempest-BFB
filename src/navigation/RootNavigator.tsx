import React, { Component } from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import { ViewNames } from './ViewNames'
import { NavigatorTabs } from './NavigatorTabs'

//Screens
import { Home, HomeScreenParams } from '../screens/Home/Home'
import { Profile, ProfileScreenParams } from '../screens/Profile/Profile'
import { Following, FollowingScreenParams } from '../screens/Following/Following'
import { Search, SearchScreenParams } from '../screens/Search/Search'
import { Investing, InvestingScreenParams } from '../screens/Investing/Investing'
import { InvestOnCompany, InvestOnCompanyScreenParams } from '../screens/InvestOnCompany/InvestOnCompany'

export type MainNavigatorParamsList = {
  [ViewNames.NavigatorTabs]: undefined
  [ViewNames.Home]: HomeScreenParams
  [ViewNames.Profile]: ProfileScreenParams
  [ViewNames.Following]: FollowingScreenParams
  [ViewNames.Search]: SearchScreenParams
  [ViewNames.Investing]: InvestingScreenParams
  [ViewNames.InvestOnCompany]: InvestOnCompanyScreenParams
}

export type MainNavigationProp<RouteName extends keyof MainNavigatorParamsList> = StackNavigationProp<
  MainNavigatorParamsList,
  RouteName
>

export type MainRouteProp<RouteName extends keyof MainNavigatorParamsList> = RouteProp<
  MainNavigatorParamsList,
  RouteName
>

const mainStack = createStackNavigator<MainNavigatorParamsList>()

export class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <mainStack.Navigator screenOptions={{ headerShown: false }}>
          <mainStack.Screen name={ViewNames.NavigatorTabs} component={NavigatorTabs} />
          <mainStack.Screen name={ViewNames.Home} component={Home} />
          <mainStack.Screen name={ViewNames.Profile} component={Profile} />
          <mainStack.Screen name={ViewNames.InvestOnCompany} component={InvestOnCompany} />
          <mainStack.Screen name={ViewNames.Investing} component={Investing} />
          <mainStack.Screen name={ViewNames.Search} component={Search} />
          <mainStack.Screen name={ViewNames.Following} component={Following} />
        </mainStack.Navigator>
      </NavigationContainer>
    )
  }
}
