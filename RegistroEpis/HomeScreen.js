// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Agregar la imagen */}
      <Image
        source={require('./assets/ciepis_logo.png')}
        style={styles.image}
      />
      <Text style={styles.welcomeMessage}>¡Bienvenido al Congreso!</Text>
      <Text style={styles.description}>
        Este congreso es un evento importante en el que puedes aprender y compartir conocimientos.
        Explora las diferentes interfaces a continuación:
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text>Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VerLista')}
        >
          <Text>Ver Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Presentacion')}
        >
          <Text>Presentación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 768, // Ajusta el ancho de la imagen según tus necesidades
    height: 269, // Ajusta la altura de la imagen según tus necesidades
    marginBottom: 10,
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Esto coloca los botones horizontalmente
  },
  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10, // Agrega margen horizontal entre los botones
    borderRadius: 5,
  },
});

export default HomeScreen;


