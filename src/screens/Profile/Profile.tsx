import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { ViewNames } from '../../navigation/ViewNames'
import { MainNavigationProp, MainRouteProp } from '../../navigation/RootNavigator'
import styles from './styles'

export type ProfileScreenParams = undefined

interface ProfileProps {
  navigation: MainNavigationProp<ViewNames.Profile>
  route: MainRouteProp<ViewNames.Profile>
}

export class Profile extends Component<ProfileProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContent}>
          <TouchableOpacity>
            <Image
              style={styles.profilePicture}
              source={{
                uri:
                  'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
              }}
            />
          </TouchableOpacity>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.profileName}>
              Brandon Fry-Bailey <Ionicons name={'checkmark-circle'} size={25} color={'#66fcf1'} />
            </Text>
            <Text style={styles.profileTitle}>Lakewashington Tech, Entrepreneur</Text>
            <Text style={styles.profileCompany}>(2B) ToBe Games</Text>
          </View>
        </View>
        <View>
          <View style={styles.profileOptions}>
            <TouchableOpacity style={styles.option}>
              <Ionicons name={'settings-outline'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionCenter}
              onPress={() => this.props.navigation.navigate(ViewNames.Following)}>
              <Ionicons name={'newspaper-outline'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Feather name={'edit'} size={60} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileOptions}>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name={'bank-transfer'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Transfers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionCenter2}
              onPress={() => this.props.navigation.navigate(ViewNames.Investing)}>
              <Fontisto name={'money-symbol'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Investing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name={'newspaper-variant-outline'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Statements</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileOptions}>
            <TouchableOpacity style={styles.option}>
              <MaterialCommunityIcons name={'history'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionCenter3}>
              <Ionicons name={'add-circle-outline'} size={80} color={styles.optionColor2.color} />
              <Text style={styles.profileOptionsText}>Create A Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Ionicons name={'help'} size={65} color={styles.optionColor.color} />
              <Text style={styles.profileOptionsText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
