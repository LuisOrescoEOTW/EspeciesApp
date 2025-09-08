import { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground 
} from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/services/firebaseConfig";
import { useRouter } from "expo-router";

export default function IniciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)/report");
    } catch (error: any) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado correctamente");
      router.replace("/(tabs)/report");
    } catch (error: any) {
      alert(`Error al registrar: ${error.message}`);
    }
  };

  const handleBack = () => router.replace("/(tabs)");

  return (
    <ImageBackground
      source={require("../assets/images/fondoInicial.png")}
      style={styles.background}
    >
      <View style={styles.centeredContainer}>
        <Text style={styles.title}>Avistajes en APN</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.link}>
              ¿No tenés cuenta? <Text style={{ color: "red" }}>Registrate</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.link}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  centeredContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30, color: "grey" },
  form: { width: "100%", maxWidth: 350, backgroundColor: "rgba(255,255,255,0.85)", padding: 20, borderRadius: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 },
  button: { backgroundColor: "green", padding: 15, borderRadius: 5, alignItems: "center", marginBottom: 10 },
  buttonText: { color: "white", fontWeight: "bold" },
  link: { textAlign: "center", marginTop: 10 },
});
