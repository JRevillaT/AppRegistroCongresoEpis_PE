// presentacion.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Datos de ejemplo de los ponentes
const ponentesData = [
  {
    id: '1',
    nombre: 'Oscar Cuadros',
    fecha: 'Jueves, 28 de noviembre',
    horaInicio: '10:00 AM',
    tema: 'Implementacion de Iot para la prevencion de desborde de rios',
    imagen: require('./assets/iot.png'), // Reemplaza con la ruta de la imagen del ponente 1
  },
  {
    id: '2',
    nombre: 'Aurea Soriano',
    fecha: 'Jueves, 28 de noviembre',
    horaInicio: '11:30 AM',
    tema: 'Deep Learning para la deteccion de nubes de ceniza volcanica',
    imagen: require('./assets/deeplearning.png'), // Reemplaza con la ruta de la imagen del ponente 2
  },
  // Agrega más ponentes aquí
];

function PresentacionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ponentes del Congreso</Text>
      <FlatList
        data={ponentesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ponenteItem}>
            <Image source={item.imagen} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.fecha}>{item.fecha}</Text>
            <Text style={styles.horaInicio}>Hora de inicio: {item.horaInicio}</Text>
            <Text style={styles.tema}>Tema: {item.tema}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ponenteItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fecha: {
    fontSize: 16,
  },
  horaInicio: {
    fontSize: 16,
  },
  tema: {
    fontSize: 16,
  },
});

export default PresentacionScreen;

