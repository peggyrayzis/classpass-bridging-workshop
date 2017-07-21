//  Created by react-native-create-bridge

import { NativeModules, NativeEventEmitter } from 'react-native';

const { CPModule } = NativeModules;

const CPModuleEmitter = new NativeEventEmitter(CPModule);

export default {
  exampleMethod() {
    return CPModule.exampleMethod();
  },

  emitter: CPModuleEmitter,

  EXAMPLE_CONSTANT: CPModule.EXAMPLE_CONSTANT,
};
