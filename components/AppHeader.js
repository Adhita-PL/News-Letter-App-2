import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>News Letter</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 0
  },
  textStyle: {
    fontSize: 40,
    fontFamily: 'monospace',
  },
});
