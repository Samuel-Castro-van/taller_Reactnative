// src/app/experience.tsx
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Experiencia Laboral</Text>

      <TarjetaExperiencia
        cargo="estudiante sena"
        empresa="Sena"
        periodo="Enero 2024 - Noviembre 2025"
        descripcion="Desarrollo de paginas webs con html css y js."
      />

      <TarjetaExperiencia
        cargo="Tecnologo sena"
        empresa="SENA"
        periodo="2026 - Actualidad"
        descripcion="Aprendizaje de desarrollo de aplicaciones moviles y web con react native y react js."
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