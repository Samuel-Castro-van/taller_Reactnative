// src/components/StudyCard.tsx
import { StyleSheet, Text, View } from "react-native";

type Props = {
  titulo: string;
  institucion: string;
  anio: number;
  enCurso: boolean;
};

export default function TarjetaEstudio({ titulo, institucion, anio, enCurso }: Props) {
  return (
    <View style={[estilos.tarjeta, enCurso ? estilos.enCurso : estilos.finalizado]}>
      <Text style={estilos.titulo}>{titulo}</Text>

      {/* Aquí se verá la insignia "En Curso" cuando implementemos el reto */}
      {enCurso && <Text style={estilos.badge}>En Curso</Text>}

      <Text style={estilos.subtitulo}>{institucion}</Text>
      <Text style={estilos.anio}>{anio}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
  },
  enCurso: {
    backgroundColor: "#eef2ff",
    borderColor: "#6366f1",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  anio: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  badge: {
    color: "#6366f1",
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 4,
  },
});