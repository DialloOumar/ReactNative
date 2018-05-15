import React, { Component } from 'react';
import { View, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAZ3-JUtlbEfpMz4BSOqDwLdynHI1JTBM4',
      authDomain: 'authentication-2502a.firebaseapp.com',
      databaseURL: 'https://authentication-2502a.firebaseio.com',
      projectId: 'authentication-2502a',
      storageBucket: 'authentication-2502a.appspot.com',
      messagingSenderId: '654472419575'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
          <Button title='Log out' onPress={() => firebase.auth().signOut()} />
        );
    case false:
      return <LoginForm />;
    default:
      return (
        <View style={styles.spinnerConstainerStyle}>
          <Spinner size='large' />
        </View>);
  }
}

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerConstainerStyle: {
    alignSelf: 'center',
    paddingBottom: 100
  }
};

export default App;
