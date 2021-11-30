import React, { Component } from 'react'
import { TextInput as ReactTextInput, TextInputProps as ReactTextInputProps, StyleProp, TextStyle } from 'react-native'

interface TextInputProps extends ReactTextInputProps {}

export class TextInput extends Component<TextInputProps> {
  render() {
    let style: StyleProp<TextStyle> = {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      borderWidth: 1,
      borderRadius: 10,
    }

    return <ReactTextInput {...this.props} style={[style, this.props.style]} />
  }
}
