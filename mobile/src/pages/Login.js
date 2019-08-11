import React, { Fragment } from 'react'

import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native'

import logo from '../../assets/logo.png'

function Login() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Image source={logo} />
        <TextInput
          style={styles.input}
          placeholder='Seu user do Github'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.button}
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
