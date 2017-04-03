import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDSRco7o0lhRQFYv7TCZYJg-tagcXDVvYE',
    authDomain: 'authentication-836ad.firebaseapp.com',
    databaseURL: 'https://authentication-836ad.firebaseio.com',
    projectId: 'authentication-836ad',
    storageBucket: 'authentication-836ad.appspot.com',
    messagingSenderId: '1054842068677'
  });
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
