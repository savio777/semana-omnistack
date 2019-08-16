import React, { Fragment, useState, useEffect } from 'react'

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native'

import api from '../services/api'

import AsyncStorage from '@react-native-community/async-storage';

import logo from '../../assets/logo.png'

function Login({ navigation }) {

  const [user, setUse] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        navigation.navigate('Main', { user })
      }
    })
  }, [])

  async function handleLogin() {
    const response = await api.post('dev', {
      user: user
    })

    const { _id } = response.data

    await AsyncStorage.setItem('user', _id)

    navigation.navigate('Main', { user: _id })
  }


  return (
    <Fragment>
      <View style={styles.container}>
        <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content' />
        <Image source={logo} />
        <TextInput
          style={styles.input}
          placeholder='Seu user do Github'
          autoCapitalize='none'
          value={user}
          onChangeText={setUse}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    height: 46,
    backgroundColor: '#DF4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  container: {
    justifyContent: 'center', // alinha na vertical
    alignItems: 'center',     // alinha na horizontal
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 30
  },
  input: {
    alignSelf: 'stretch',
    height: 46,
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15
  }

})

export default Login
