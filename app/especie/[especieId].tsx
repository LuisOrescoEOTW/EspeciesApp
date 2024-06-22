import { EspecieDetail } from "@/src/components/EspecieDetail";
import { EspecieHeader } from "@/src/components/EspecieHeader";
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { useEspecie } from "@/src/services/especies.hooks";
import { themeStyles } from "@/src/theme/theme";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={themeStyles.screen}>
      <EspecieHeader especie={especie} />
      <EspecieDetail especie={especie} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
