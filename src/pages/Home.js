import React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

import commonStyles from '../commonStyles'
import TurmaDaMonica from '../../assets/imgs/home/01.png'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Turma da Mônica</Text>
      <Image style={styles.image}
        source={TurmaDaMonica}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    position: 'absolute',
    bottom: 100,
    fontSize: 50,
    textAlign: 'center',
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.title
  },
  image: {
    resizeMode: 'contain',
    width: '80%'
  }
})