import { EspecieDetail } from "@/src/components/EspecieDetail"; //No existe el archivo
import { EspecieHeader } from "@/src/components/EspecieHeader"; //No existe el archivo
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { useEspecie } from "@/src/services/especies.hooks";
import { themeColors, themeStyles } from "@/src/theme/theme";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function EspecieShowScreen() {
  const searchParams = useLocalSearchParams();

  const spId =
    typeof searchParams.especieId === "string"
      ? parseInt(searchParams.especieId)
      : 1;

  const { data: especie, isFetching, isError } = useEspecie(spId);

  if (isFetching) {
    return (
      <View style={styles.container}>
        <TextNunitoSans>Cargando...</TextNunitoSans>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <TextNunitoSans>ERROR!</TextNunitoSans>
      </View>
    );
  }

  if (!especie) {
    return (
      <View style={styles.container}>
        <TextNunitoSans>La especie no existe</TextNunitoSans>
      </View>
    );
  }

  return (
    <View style={themeStyles.screen}>
      <EspecieHeader especie={especie} />
      <EspecieDetail especie={especie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
