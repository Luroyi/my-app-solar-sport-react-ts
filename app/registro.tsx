// Registro.js
import styles from '@/constants/styles'; // Importando los estilos centralizados
import auth from '@/credentials'; // Importa tu configuración de Firebase
import { Link } from 'expo-router'; // Asegúrate de que Link esté importado
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const Registro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Éxito", "Registro exitoso");
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

            <Text style={styles.label}>Repetir contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Repetir contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#8B8B8B"
            />
            
            <TouchableOpacity style={[styles.button, styles.marginBottom1]} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <Link href="/login" style={[styles.link, styles.marginBottom]}>
                Ya tienes una cuenta? Inicia sesión
            </Link>

        </View>
    );
};

export default Registro;
