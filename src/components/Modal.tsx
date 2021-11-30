import React, { Component } from 'react'
import {
  Modal as ReactModal,
  ModalProps as ReactModalProps,
  StyleProp,
  ViewStyle,
  View,
  Text,
  TextStyle,
} from 'react-native'

interface ModalProps extends ReactModalProps {
  title?: string
}

export class Modal extends Component<ModalProps> {
  render() {
    let modalStyle: StyleProp<ViewStyle> = {
      position: 'absolute',
      backgroundColor: '#d3d3d3',
      width: '100%',
      alignItems: 'center',
      padding: 10,
      bottom: 0,
    }

    let overlayStyle: StyleProp<ViewStyle> = {
      backgroundColor: 'black',
      height: '100%',
      opacity: 0.6,
    }

    let textStyle: StyleProp<TextStyle> = {
      color: 'black',
      fontSize: 32,
      fontWeight: 'bold',
      padding: 10,
    }

    return (
      <ReactModal {...this.props} transparent={true}>
        <View style={overlayStyle} onTouchEnd={this.props.onRequestClose} />
        <View style={modalStyle}>
          {this.props.title !== undefined && <Text style={textStyle}>{this.props.title}</Text>}
          {this.props.children}
        </View>
      </ReactModal>
    )
  }
}
