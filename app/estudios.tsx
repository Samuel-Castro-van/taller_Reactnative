// src/app/studies.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.tituloSeccion}>Formación Académica</Text>

      <TarjetaEstudio
        titulo="Bachiller"
        institucion="Institución Educativa arborizadora Baja"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Técnico en Programacion"
        institucion="SENA"
        anio={2025}
        enCurso={false}
      />

      <TarjetaEstudio
        titulo="Tecnólogo en Análisis y Desarrollo de Software"
        institucion="SENA"
        anio={2026}
        enCurso={true}
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