import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function IniciarSesion () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login con Email:", email);
    console.log("Login con Pass:", password);
    // Aquí integrás Firebase o Supabase
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('./assets/images/fondoInicial.png')",
          backgroundSize: "cover",
        }}
      />
      <Container maxWidth="sm">
        <Paper
          elevation={5}
          sx={{
            padding: 5,
            borderRadius: 3,
            mt: -50,
          }}
        >
          <Box textAlign="center" mb={3}>
            <Typography variant="subtitle1">
              Ingresá para reportar especies
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            margin="normal"
            value={email}
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            margin="normal"
            value={password}
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 2, borderRadius: 2 }}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3, cursor: "pointer" }}
          >
            ¿No tenés cuenta?{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>Registrate</span>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};
