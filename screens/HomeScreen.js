import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import db from '../Config'

export default class HomeScreen extends React.Component {
  changeScreen = (screen)  => {
    this.props.navigation.navigate(screen);
  }
  dislikePressed() {
    var dislike = db.ref('Rating'+'/');
    dislike.update({
      'dislikePressed' : 1
    })
  }
  likePressed() {
    var like = db.ref('Rating'+'/');
    like.update({
      'likePressed' : 1
    })
  }
  render() {
    return(
      <View style = {styles.viewStyle}>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('JokeScreen')}}>
          <Text style = {styles.textStyle}>Jokes</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Horoscope')}}>
          <Text style = {styles.textStyle}>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Weather')}}>
          <Text style = {styles.textStyle}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('News')}}>
          <Text style = {styles.textStyle}>Top News</Text>
        </TouchableOpacity>
        <Text style = {styles.rate}>Rate Us</Text>
        <TouchableOpacity onPress = {this.likePressed}>
          <Image style = {styles.image2} source={require('../assets/thumbsup.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {this.dislikePressed}>
          <Image style = {styles.image1} source={require('../assets/thumbsdown.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  buttonStyle: {
    borderWidth: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 60,
    marginBottom: 40
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'times'
    },

    rate: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'times'
    },

  image1: {
    width: 50,
    height: 50,
    marginTop: -35,
    marginLeft: 100,
    marginRight:-30
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: -90
  }
});