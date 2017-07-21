//  Created by react-native-create-bridge

import React, { Component } from 'react'
import { requireNativeComponent } from 'react-native'

const CPView = requireNativeComponent('CPView', CPViewView)

export default class CPViewView extends Component {
  render () {
    return <CPView {...this.props} />
  }
}

CPViewView.propTypes = {
  exampleProp: React.PropTypes.string
}
