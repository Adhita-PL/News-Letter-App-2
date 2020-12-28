import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class JokeScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>Laughing Corner</Text>
        <Image style={styles.img} source={require('../assets/joke1.jpg')} />
        <Image style={styles.img} source={require('../assets/joke2.jpg')} />
        <Image style={styles.img} source={require('../assets/joke3.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  },

  img: {
    marginLeft: 10,
    width: 290,
    height: 150,
  },

  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30,
    fontWeight: 'bold',
  },
});
