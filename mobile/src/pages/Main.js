import React, { Fragment } from 'react'

import {
  Text,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native'

import logo from '../../assets/logo.png'

function Main({ navigation }) {

  const back = () => {
    navigation.navigate('Login')
  }

  return (
    <Fragment>
      <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content' />
      <View>
        {/* test api */}
        <Text>{navigation.getParam('user')}</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <Image source={logo} />
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://avatars1.githubusercontent.com/u/19521709?v=4' }}
            />
            <View style={styles.footer}>
              <Text style={styles.name}>Linus</Text>
              <Text
                numberOfLines={3}
                style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
            </View>
          </View>


          {/* tests css */}
          <View style={styles.card}>
            <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/1024025?v=4' }} />
            <View style={styles.footer}>
              <Text style={styles.name}>Linus</Text>
              <Text
                numberOfLines={3}
                style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/1024025?v=4' }} />
            <View style={styles.footer}>
              <Text style={styles.name}>Linus</Text>
              <Text
                numberOfLines={3}
                style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/1024025?v=4' }} />
          <View style={styles.footer}>
            <Text style={styles.name}>Linus</Text>
            <Text
              numberOfLines={3}
              style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/1024025?v=4' }} />
          <View style={styles.footer}>
            <Text style={styles.name}>Linus</Text>
            <Text
              numberOfLines={3}
              style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.avatar}
            source={{ uri: 'https://avatars0.githubusercontent.com/u/1024025?v=4' }} />
          <View style={styles.footer}>
            <Text style={styles.name}>Linus</Text>
            <Text
              numberOfLines={3}
              style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt felis. Maecenas consequat gravida orci, ac tempus augue elementum vel. Donec varius risus et tellus semper, non auctor est porta. Sed maximus nibh tincidunt ipsum gravida, ut ornare risus porttitor.
              </Text>
          </View>
        </View>

      </SafeAreaView >
    </Fragment >
  )
}

const styles = StyleSheet.create({
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
    height: 100,
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
    lineHeight: 20
  }
})

export default Main
