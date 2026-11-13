// src/app/hobbies.tsx
import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Mis Hobbies</Text>

      <TarjetaHobby
        nombre="Programar"
        icono="code-slash"
        descripcionCorta="Crear proyectos personales"
        onPress={() =>
          Alert.alert(
            "Programar",
            "Me gusta crear aplicaciones móviles y web en mi tiempo libre. Actualmente trabajo en varios proyectos personales con React Native."
          )
        }
      />

      <TarjetaHobby
        nombre="Videojuegos"
        icono="game-controller"
        descripcionCorta="Jugar los fines de semana"
        onPress={() =>
          Alert.alert(
            "Videojuegos",
            "Juego videojuegos en mi tiempo libre. Me ayudan a relajarme."
          )
        }
      />

      <TarjetaHobby
        nombre="Música"
        icono="musical-notes"
        descripcionCorta="Escuchar musica"
        onPress={() =>
          Alert.alert(
            "Música",
            "Me encanta escuchar Metal y rock mientras hago mis que haceres"
          )
        }
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contenido: {
    padding: 20,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 16,
  },
});