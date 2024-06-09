import { EspecieDetail } from "@/src/components/EspecieDetail";
import { EspecieHeader } from "@/src/components/EspecieHeader";
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { useEspecie } from "@/src/services/especies.hooks";
import { themeColors, themeStyles } from "@/src/theme/theme";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { StyleSheet, View, ViewBase, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function EspecieShowScreen() {
  const searchParams = useLocalSearchParams();
  //searchParams -> Recibe especieId: "14218"

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
      <View style={styles.general}>
        <Link style={styles.boton} href={{ pathname: "/app/tabs/report.tsx", params: { reportSpId: especie.sp_id } }}>Reportar Avistaje</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  general: {
    flex: 0.5,
    backgroundColor: "black",
    alignContent: "center",
    textAlign: "center"
  },
  boton: {
    flex: 0.3,
    fontSize: 24,
    alignContent: "center",
    backgroundColor: "#BEDE61",
    textAlign: "center",
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 30,
    color: "#FFFFFF"
  }
});
