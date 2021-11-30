import React, { Component } from 'react'
import { Pressable, PressableProps, StyleProp, ViewStyle, Text, TextStyle, ColorValue } from 'react-native'

interface ButtonProps extends PressableProps {
  text?: string
  margin?: string | number
  style?: StyleProp<TextStyle>
  color?: ColorValue
  pressedColor?: ColorValue
}

export class PrimaryButton extends Component<ButtonProps> {
  render() {
    let buttonStyle: StyleProp<ViewStyle> = {
      width: '100%',
      borderRadius: 20,
      padding: 10,
    }

    let textStyle: StyleProp<TextStyle> = {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      textAlign: 'center',
    }

    let defaultColor = this.props.color ? this.props.color : 'teal'
    let pressedColor = this.props.pressedColor ? this.props.pressedColor : 'grey'

    return (
      <Pressable
        {...this.props}
        style={({ pressed }) => [
          buttonStyle,
          {
            margin: this.props.margin,
            backgroundColor: pressed ? pressedColor : defaultColor,
          },
          this.props.style,
        ]}>
        {this.props.text !== undefined && <Text style={textStyle}>{this.props.text}</Text>}
        {this.props.children}
      </Pressable>
    )
  }
}
