import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VerListaScreen() {
  const [registros, setRegistros] = useState([]);
  const cardWidth = 250; // Ancho fijo para cada card

  useEffect(() => {
    const cargarRegistros = async () => {
      try {
        // Obtiene registros desde AsyncStorage
        const registrosGuardados = await AsyncStorage.getItem('registros');
        if (registrosGuardados) {
          setRegistros(JSON.parse(registrosGuardados));
        }
      } catch (error) {
        console.error('Error al cargar registros:', error);
      }
    };

    cargarRegistros();
  }, []);

  // Función para renderizar cada tarjeta de registro
  const renderRegistro = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Text style={styles.label}>Nombre:</Text>
      <Text style={styles.text}>{item.nombre}</Text>
      
      <Text style={styles.label}>Edad:</Text>
      <Text style={styles.text}>{item.edad} años</Text>
      
      <Text style={styles.label}>Fecha de Registro:</Text>
      <Text style={styles.text}>{item.fechaRegistro}</Text>
      
      <Text style={styles.label}>Universidad:</Text>
      <Text style={styles.text}>{item.universidad}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <FlatList
        data={registros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRegistro}
        horizontal={true} // Mostrar elementos en una fila horizontal
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start', // Alinear elementos en la parte superior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'flex-start', // Alinear elementos en la parte superior
    paddingVertical: 10, // Espacio vertical entre las tarjetas
  },
  card: {
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
    padding: 15, // Aumentar el espacio interno
    marginHorizontal: 10, // Margen horizontal entre las tarjetas
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 8, // Aumentar el espacio inferior
  },
});

export default VerListaScreen;
