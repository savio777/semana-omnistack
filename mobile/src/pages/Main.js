import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import {
  Text,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import io from 'socket.io-client'

import api from '../services/api'

import logo from '../../assets/logo.png'

import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import match from '../../assets/match.png'

function Main({ navigation }) {

  const logged = navigation.getParam('_id')
  const [users, setUsers] = useState([])
  const [matchDev, setMatchDev] = useState(true)

  // request api
  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/dev', {
        headers: { user: logged }
      })
      setUsers(response.data)
    }
    loadUser()
  }, [logged])

  // request socket.io
  useEffect(() => {
    const socket = io('192.168.0.111:7777', {
      query: { user: logged }
    })

    socket.on('match', (dev) => {
      setMatchDev(dev)
    })
  }, [logged])

  async function handleLike() {
    //const firstUser = users[0]
    const [firstUser, ...rest] = users

    await api.post(`/dev/${firstUser._id}/likes`, null, {
      headers: { user: logged }
    })

    setUsers(rest)
  }

  async function handleDislike() {
    const [firstUser, ...rest] = users

    await api.post(`/dev/${firstUser._id}/dislikes`, null, {
      headers: { user: logged }
    })
    setUsers(rest)
  }

  async function logout() {
    await AsyncStorage.clear()

    navigation.navigate('Login')
  }

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content' />
      <TouchableOpacity onPress={logout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        {(users.length > 0) ? (users.map((user, i) => (
          <View key={user._id} style={[styles.card, { zIndex: users.length - i }]}>
            <Image
              style={styles.avatar}
              source={{ uri: user.avatar }}
            />
            <View style={styles.footer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text
                numberOfLines={3}
                style={styles.bio}
              >
                {user.bio}
              </Text>
            </View>
          </View>
        ))) : <Text style={styles.empty}>Acabou:(</Text>}
      </View>

      {(users.length > 0) ?
        (<View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLike} >
            <Image source={like} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDislike}>
            <Image source={dislike} />
          </TouchableOpacity>
        </View>
        ) : (<View />)
      }

      {(matchDev) ?
        (
          <View style={styles.matchContainer}>
            <TouchableOpacity onPress={()=> setMatchDev(null)}>
              <Text style={styles.textExitButton}>X</Text>
            </TouchableOpacity>
            <Image style={styles.matchImage} source={match} />
            <Image
              style={styles.matchAvatar}
              source={{ uri: 'https://avatars0.githubusercontent.com/u/4248081?v=4' }} 
            />
            <Text style={styles.matchName}>Nome do User</Text>
            <Text style={styles.matchBio}> bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla bla</Text>
          </View>
        ) : (null)
      }
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#999',
    fontSize: 26,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  cardContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  footer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  avatar: {
    flex: 1,
    height: 300,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18
  },
  logo: {
    marginTop: 30
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
  },

  matchContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  matchAvatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#FFF',
    marginVertical: 30,
  },
  matchName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF'
  },
  matchImage: {
    width: 350,
    height: 150,
  }
})

export default Main
