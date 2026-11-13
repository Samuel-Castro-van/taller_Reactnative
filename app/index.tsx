// src/app/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      {/* Avatar */}
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Samuel Castro Vanegas</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      {/* Perfil Profesional */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles y web.
          Con habilidades en React Native, JavaScript, HTML5, Python y gestión de bases
          de datos relacionales y no relacionales.
        </Text>
      </View>

      {/* Contacto */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#f59e0b"
          onPress={() => Alert.alert("Correo", "samuelcasvan@misena.edu.co")}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#10b981"
          onPress={() => Alert.alert("Teléfono", "+57 304 3929395")}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0a66c2"
          onPress={() => Alert.alert("LinkedIn", "linkedin.com/in/samuel-castro-vanegas")}
        />

        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877f2"
          onPress={() => Alert.alert("Facebook", "facebook.com/samuel.castro")}
        />

        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#e4405f"
          onPress={() => Alert.alert("Instagram", "@samuel_castro")}
        />
      </View>
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
  avatarContenedor: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 8,
  },
  profesion: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
});