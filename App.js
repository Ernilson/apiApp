import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Parametros from './src/Parametro';

const AppNavigator = createSwitchNavigator({
 Parametros: Parametros
},
{
  initialRouteName: 'Parametros',
}
)

export default createAppContainer(AppNavigator);