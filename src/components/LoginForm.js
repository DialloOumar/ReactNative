import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      error: '',
      email: '',
      password: '',
      loading: ''
    });
  }
  onLoginFail() {
    this.setState({ error: 'Authentication Failled', loading: false });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
        <Button onPress={this.onButtonPress.bind(this)} name='Log in' />
    );
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='example@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}> {this.state.error} </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
};

export default LoginForm;
