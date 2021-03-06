import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
            this.setState({ error: 'Authentication Failed!' });
          });
      });
  }

  render() {
    return (
        <Card>
          <CardSection>
          <Input
          label="Email"
          placeholder="user@abc.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          />
          </CardSection>
          <CardSection>
          <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
          </CardSection>
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          <CardSection>
            <Button whenPress={this.onButtonPress.bind(this)}>
            Log In
            </Button>
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
  }
};

export { LoginForm };
