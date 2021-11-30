import React, { Component } from 'react'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'

//Screens
import { Home } from '../screens/Home/Home'
import { Profile } from '../screens/Profile/Profile'
import { Following } from '../screens/Following/Following'
import { Search } from '../screens/Search/Search'
import { Investing } from '../screens/Investing/Investing'

import { ViewNames } from './ViewNames'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

export class NavigatorTabs extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          tabStyle: {
            backgroundColor: 'black',
          },
          activeTintColor: '#66fcf1',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'home'} size={25} color={color} />,
          }}
          name={ViewNames.Home}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Fontisto name={'money-symbol'} size={25} color={color} />,
          }}
          name={ViewNames.Investing}
          component={Investing}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'search-outline'} size={25} color={color} />,
          }}
          name={ViewNames.Search}
          component={Search}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'newspaper-outline'} size={25} color={color} />,
          }}
          name={ViewNames.Following}
          component={Following}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <AntIcons name={'user'} size={28} color={color} />,
          }}
          name={ViewNames.Profile}
          component={Profile}
        />
      </Tab.Navigator>
    )
  }
}
