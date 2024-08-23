import styles from '@/constants/styles'; // Importando los estilos centralizados
import auth from '@/credentials';
import { Link } from 'expo-router'; // Asegúrate de que Link esté importado
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Éxito", "Inicio de sesión exitoso");
            // Navegar a la pantalla principal, si es necesario
        } catch (error: any) {
            const { message } = error;
            Alert.alert("Error", message ? message : 'Error encontrado');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#8B8B8B"
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#8B8B8B"
            />

            <Link href="/forgetpassword" style={[styles.link, styles.marginBottom]}>
                Olvidaste la contraseña
            </Link>

            <TouchableOpacity style={[styles.button, styles.marginBottom1]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <Link href="/register" style={[styles.colorBlack, { textAlign: 'center' }]}>
                ¿No tienes una cuenta? <Text style={[styles.colorPrimary, { textAlign: 'center' }]}>Regístrate</Text>
            </Link>
        </View>
    );
};

export default Login;

