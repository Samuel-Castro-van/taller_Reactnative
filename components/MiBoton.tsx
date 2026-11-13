// src/components/MyButton.tsx
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  textoBoton: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  colorBoton: string;
  onPress: () => void;
};

export default function MiBoton({ textoBoton, nombreIcono, colorBoton, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={nombreIcono} size={20} color="#fff" style={{ marginRight: 8 }} />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  texto: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});