import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  function handleRedirectingToWebPage() {
    Linking.openURL('http://192.168.0.4:3000/give-classes');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.bgContent}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, basta se cadastrar como professor na nossa plataforma
          web.
        </Text>
      </ImageBackground>
      <RectButton style={styles.button} onPress={handleRedirectingToWebPage}>
        <Text style={styles.buttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
