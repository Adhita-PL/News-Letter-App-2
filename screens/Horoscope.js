import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
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
        <Text style={styles.head}>Horoscope of today</Text>
        <Text style={styles.textStyle}>
          Atrological prediction for November 16, what’s in store for Aries,
          Virgo, Libra, Scorpio and other zodiac signs Daily horoscope: Are the
          stars lined up in your favour? Find out the astrological prediction
          for Aries, Leo, Virgo, Libra and other zodiac signs for November 16.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 40,
    backgroundColor: 'yellow',
    marginTop: -30
  },
});
