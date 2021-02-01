import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import Slider from './pages/Slider'
import Home from './pages/Home'

export default function Navigation() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name='Slider'
          component={Slider}
        />
        <Screen
          name='Home'
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  )
}