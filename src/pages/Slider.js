import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  Alert
} from 'react-native'

import commonStyles from '../commonStyles'
import Home from '../pages/Home'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AppIntroSlider from 'react-native-app-intro-slider'
import IconPrevButton from 'react-native-vector-icons/Ionicons'
import IconNextButton from 'react-native-vector-icons/Ionicons'
import IconDoneButton from 'react-native-vector-icons/Ionicons'

const slides = [
  {
    key: '01',
    title: 'Mônica',
    text: 'Mônica é uma personagem fictícia de histórias em quadrinhos brasileira criada por Mauricio de Sousa em 1963, nas tiras de jornais de Cebolinha.',
    image: require('../../assets/imgs/sliders/01.png')
  },
  {
    key: '02',
    title: 'Cebolinha',
    text: 'Cebolácio Menezes da Silva Júnior, mais conhecido como Cebolinha, é um personagem de histórias em quadrinhos e tirinhas, criado em 1960 por Mauricio de Sousa. Sempre à procura de um jeito de pegar o coelhinho de sua amiga Mônica, o Sansão.',
    image: require('../../assets/imgs/sliders/02.png')
  },
  {
    key: '03',
    title: 'Cascão',
    text: 'Cascão é o personagem de HQ criado por Maurício de Sousa em 1961. Foi inspirado em um menino que Maurício conheceu em Mogi das Cruzes, que tinha esse apelido por ser muito sujo. Sua principal característica é sua mania de não tomar banho e sua paixão pela sujeira.',
    image: require('../../assets/imgs/sliders/03.png')
  }
]

export default function App() {

  const navigation = useNavigation()

  function handleNavigationToHome() {
    navigation.navigate('Home')
  }

  const [showHome, setShowHome] = useState(false)

  const saveResultShowViewSliders = async () => {
    try {
      await AsyncStorage.setItem("@KeySlider", JSON.stringify(showHome))
    } catch (err) {
      Alert.alert(
        'Ops!',
        'Erro ao Salvar'
      )
    }
  }

  const loadResultShowViewSliders = async () => {
    try {
      let showHome = await AsyncStorage.getItem("@KeySlider")

      if (showHome !== null) {
        setShowHome(JSON.parse(true)) /* parse PARA true ---- */
      }
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    loadResultShowViewSliders()
  }, [])

  function renderSlides({ item }) {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
          source={item.image}
        />
        <View style={{ alignItems: 'center', paddingBottom: '30%' }}>
          <Text style={styles.title}>
            {item.title}
          </Text>
          <Text style={styles.text}>
            {item.text}
          </Text>
        </View>
      </View>
    )
  }

  if (showHome === true) {
    return <Home /> /* CASO O ESTADO (showHome === true) RETORNA O COMPONENTE HOME */
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30
        }}
        showNextButton={true}
        showPrevButton={true}
        dotClickEnabled={true}
        renderNextButton={() => <IconNextButton name="arrow-forward" color="#009CFF" size={24} />}
        renderPrevButton={() => <IconPrevButton name="arrow-back" color="#009CFF" size={24} />}
        renderDoneButton={() => <IconDoneButton name="md-checkmark" color="#009CFF" size={24} />}
        onDone={() => { saveResultShowViewSliders(), handleNavigationToHome() }}
      /* onDone - QUANDO CLICLAR, SALVA NO ARMAZENAMENTO DO DISPOSITIVO COMO (true) E NAVEGA PARA (Home) */
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.title,
    fontSize: 35,
    paddingBottom: 10
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: commonStyles.colors.text,
    paddingBottom: 20,
    paddingHorizontal: 25
  },
  image: {
    resizeMode: 'contain',
    width: '80%'
  }
})