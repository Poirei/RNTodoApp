/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, TextInput} from 'react-native-paper';
import {firebase, fbProvider, googleProvider} from '../../firebase/config';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    console.log('Logged in.');
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <Button
          mode="contained"
          color="rgb(46, 201, 92)"
          onPress={() => onLoginPress()}
          style={styles.button}
          labelStyle={styles.buttonTitle}>
          Log in
        </Button>
        <View>OR</View>
        <Button
          mode="contained"
          color="rgb(228, 236, 111)"
          onPress={() => firebase.auth().signInWithRedirect(googleProvider)}
          style={styles.button}
          labelStyle={styles.buttonTitle}>
          Sign in with Google
        </Button>
        <Button
          mode="contained"
          color="rgb(111, 150, 236)"
          onPress={() => firebase.auth().signInWithRedirect(fbProvider)}
          style={styles.button}
          labelStyle={styles.buttonTitle}>
          Sign in with Facebook
        </Button>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign Up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
