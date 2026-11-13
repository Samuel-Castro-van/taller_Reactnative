// src/components/HobbyCard.tsx
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  nombre: string;
  icono: keyof typeof Ionicons.glyphMap;
  descripcionCorta: string;
  onPress: () => void;
};

export default function TarjetaHobby({ nombre, icono, descripcionCorta, onPress }: Props) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icono} size={32} color="#2563eb" />
      <Text style={estilos.nombre}>{nombre}</Text>
      <Text style={estilos.descripcion}>{descripcionCorta}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 2,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "#1e293b",
  },
  descripcion: {
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
    marginTop: 4,
  },
});