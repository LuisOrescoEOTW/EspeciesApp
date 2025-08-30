import { themeStyles } from "@/src/theme/theme";
import { useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DateTimeModalInput } from "@/src/components/DateTimeModalInput";
import { Foundation } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { EspecieSelector } from "@/src/components/EspecieSelector";
import { CustomButton } from "@/src/components/CustomButton";
import { CustomTextInput } from "@/src/components/CustomTextInput";
import { Map } from "@/src/components/Map";
import { TakePictureBtn } from "@/src/components/TakePictureBtn";
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { TReporte, sendReporte } from "@/src/services/especies.service";

export default function ReportScreen() {
  const params = useLocalSearchParams<{ reportSpId: string }>();
  const insets = useSafeAreaInsets();
  const [prevSpId, setPrevSpId] = useState<string | null>(null);
  const [spId, setSpId] = useState<string | null>(params?.reportSpId ?? null);
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [fecha, setFecha] = useState<Date>(new Date());
  const [hora, setHora] = useState<Date>(new Date());
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState<string | null>(null);

  const [errors, setErrors] = useState<string[]>([]);

  if (params?.reportSpId && prevSpId !== params.reportSpId) {
    setPrevSpId(params.reportSpId);
    setSpId(params.reportSpId);
  }

  const numberInputType: "numeric" | "numbers-and-punctuation" =
    Platform.select({ ios: "numbers-and-punctuation", default: "numeric" });

  const pickImage = async () => {
    // TODO: Obtengo la imagen de la galeria como base64
    let photo = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });
    // TODO: seteo la imagen
    if (!photo.canceled) {
      setImagen(photo.assets[0].base64 ? `data:image/jpeg;base64,${photo.assets[0].base64}` : null);
    }
  };

  const enviarReporte = async () => {
    // Chequeo errores
    let errorsArr = [];
    if (spId === null) {
      errorsArr.push("spId");
    }
    if (latitud === "") {
      errorsArr.push("latitud");
    }
    if (longitud === "") {
      errorsArr.push("longitud");
    }
    if (fecha === null) {
      errorsArr.push("fecha");
    }
    if (hora === null) {
      errorsArr.push("hora");
    }
    if (descripcion === "") {
      errorsArr.push("descripcion");
    }
    setErrors(errorsArr);
    // no continuo si hay errores
    if (errorsArr.length > 0) {
      return;
    }
    
    //Creo objeto para enviar
    const avistaje:TReporte = {
      sp_id: spId !== null ? parseInt(spId) : 0,
      fecha: fecha,
      hora: hora,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      descripcion: descripcion,
      imagen: imagen,
    }
    //Envío el avistaje
    sendReporte(avistaje)
    // reseteo formulario
    setSpId(null);
    setLatitud("");
    setLongitud("");
    setFecha(new Date());
    setHora(new Date());
    setDescripcion("");
    setImagen(null);
  };

  return (
    <ScrollView
      style={themeStyles.screen}
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      <TextNunitoSans style={styles.title}>Reportar avistaje</TextNunitoSans>

      <EspecieSelector
        spId={spId}
        setSpId={setSpId}
        inputStyle={errors.includes("spId") ? styles.error : null}
      />

      <Map setLatitud={setLatitud} setLongitud={setLongitud} />

      <View style={styles.rowContainer}>
        <CustomTextInput
          placeholder="Latitud"
          onChangeText={setLatitud}
          value={latitud}
          style={[
            styles.flex1,
            errors.includes("latitud") ? styles.error : null,
          ]}
          keyboardType={numberInputType}
          returnKeyType="done"
        />

        <CustomTextInput
          placeholder="Longitud"
          onChangeText={setLongitud}
          value={longitud}
          style={[
            styles.flex1,
            errors.includes("longitud") ? styles.error : null,
          ]}
          keyboardType={numberInputType}
          returnKeyType="done"
        />
      </View>

      <View style={styles.rowContainer}>
        <DateTimeModalInput
          placeholder="Fecha"
          display="inline"
          mode="date"
          date={fecha}
          onConfirm={setFecha}
          containerStyle={styles.flex1}
          inputStyle={errors.includes("fecha") ? styles.error : null}
        />

        <DateTimeModalInput
          placeholder="Hora"
          display="inline"
          mode="time"
          date={hora}
          onConfirm={setHora}
          containerStyle={styles.flex1}
          inputStyle={errors.includes("hora") ? styles.error : null}
        />
      </View>

      <CustomTextInput
        placeholder="Descripción"
        onChangeText={setDescripcion}
        value={descripcion}
        returnKeyType="done"
        multiline
        numberOfLines={3}
        style={[
          styles.descripcionInput,
          errors.includes("descripcion") ? styles.error : null,
        ]}
      />

      <View style={styles.imgCaptureContainer}>
        <Image
          source={imagen}
          placeholder={require("@/assets/images/placeholder.png")}
          placeholderContentFit="cover"
          style={styles.imagePreview}
        />
        <View>
          <TakePictureBtn setImagen={setImagen} />
          <Foundation
            name="photo"
            size={40}
            color="white"
            onPress={pickImage}
          />
        </View>
      </View>

      <Pressable onPress={enviarReporte}>
        <CustomButton label="Reportar Avistaje" />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    gap: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  flex1: { flex: 1 },
  rowContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  descripcionInput: {
    height: 88,
    paddingLeft: 30,
  },
  imgCaptureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
  },
  error: {
    borderColor: "rgb(239 68 68)",
    borderWidth: 3,
  },
});