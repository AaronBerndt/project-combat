import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default class App extends React.Component {
  render() {
    const fName = 'Aaron';
    const lName = 'Berndt';
    return (
      <View style={styles.container}>
        <Text>{`${fName} ${lName}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
