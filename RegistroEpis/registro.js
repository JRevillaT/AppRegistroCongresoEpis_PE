import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistroScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  const [universidad, setUniversidad] = useState('');

  const handleGuardar = async () => {
    // Crea un nuevo objeto de registro con los datos ingresados
    const nuevoRegistro = {
      nombre: nombre,
      edad: edad,
      fechaRegistro: fechaRegistro,
      universidad: universidad,
    };

    try {
      // Obtiene registros actuales desde AsyncStorage
      const registrosActuales = await AsyncStorage.getItem('registros');
      let registros = [];

      if (registrosActuales) {
        registros = JSON.parse(registrosActuales);
      }

      // Agrega el nuevo registro al array de registros
      registros.push(nuevoRegistro);

      // Guarda el nuevo array de registros en AsyncStorage
      await AsyncStorage.setItem('registros', JSON.stringify(registros));

      // Limpia los campos después de guardar
      setNombre('');
      setEdad('');
      setFechaRegistro('');
      setUniversidad('');

      // Navega a la pantalla de Ver Lista
      navigation.navigate('VerLista');
    } catch (error) {
      console.error('Error al guardar el registro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={(text) => setEdad(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Registro (YYYY-MM-DD)"
        value={fechaRegistro}
        onChangeText={(text) => setFechaRegistro(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Universidad a la que pertenece"
        value={universidad}
        onChangeText={(text) => setUniversidad(text)}
      />
      <Button title="Guardar" onPress={handleGuardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default RegistroScreen;
