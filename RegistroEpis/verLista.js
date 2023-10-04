import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VerListaScreen() {
  const [registros, setRegistros] = useState([]);
  const [tarjetaAnchos, setTarjetaAnchos] = useState({});

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

  const calcularAnchoTarjeta = (index, width) => {
    setTarjetaAnchos((prevAnchos) => ({
      ...prevAnchos,
      [index]: width,
    }));
  };

  // Función para renderizar cada tarjeta de registro
  const renderRegistro = ({ item, index }) => (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      <View
        style={[
          styles.card,
          { width: tarjetaAnchos[index] || 'auto' }, // Ancho basado en el contenido
        ]}
        onLayout={(e) => calcularAnchoTarjeta(index, e.nativeEvent.layout.width)}
      >
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.text}>{item.nombre}</Text>
        
        <Text style={styles.label}>Edad:</Text>
        <Text style={styles.text}>{item.edad} años</Text>
        
        <Text style={styles.label}>Fecha de Registro:</Text>
        <Text style={styles.text}>{item.fechaRegistro}</Text>
        
        <Text style={styles.label}>Universidad:</Text>
        <Text style={styles.text}>{item.universidad}</Text>
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <FlatList
        data={registros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRegistro}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center', // Centra verticalmente los elementos
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center', // Centra horizontalmente los elementos dentro del card
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    marginBottom: 5,
  },
  list: {
    width: '100%',
  },
});

export default VerListaScreen;
