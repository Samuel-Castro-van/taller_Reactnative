// src/components/ExperienceCard.tsx
import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({ cargo, empresa, periodo, descripcion }: Props) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.cargo}>{cargo}</Text>
      <Text style={estilos.empresa}>{empresa}</Text>
      <Text style={estilos.periodo}>{periodo}</Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 2,
  },
  cargo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
  },
  empresa: {
    fontSize: 14,
    color: "#2563eb",
    marginTop: 2,
  },
  periodo: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },
  descripcion: {
    fontSize: 13,
    color: "#475569",
    marginTop: 8,
    lineHeight: 18,
  },
});