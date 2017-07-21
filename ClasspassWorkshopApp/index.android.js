/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import CPModule from './CPModuleNativeModule';
import CPView from './CPViewNativeView';

export default class ClasspassWorkshopApp extends Component {
  state = {
    nativeModuleText: null,
  };

  componentWillMount() {
    CPModule.emitter.addListener('EXAMPLE_EVENT', ({ greeting }) =>
      this.setState(() => ({ nativeModuleText: greeting })),
    );
  }

  componentWillUnmount() {
    CPModule.emitter.remove();
  }

  onPress = () => {
    CPModule.exampleMethod();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>I'm a native view! 👇</Text>
        <CPView exampleProp="ClassPass" style={styles.nativeView} />
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.welcome}>Invoke method on native module</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>
          {this.state.nativeModuleText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  nativeView: {
    height: 200,
    width: 200,
    marginBottom: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent(
  'ClasspassWorkshopApp',
  () => ClasspassWorkshopApp,
);
