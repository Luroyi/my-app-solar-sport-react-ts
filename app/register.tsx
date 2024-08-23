import styles from '@/constants/styles'; // Importando los estilos centralizados
import { Link } from 'expo-router'; // Asegúrate de que Link esté importado
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        // Aquí puedes añadir la lógica para registrar un nuevo usuario
        Alert.alert("Éxito", "Registro exitoso");
    };

    return (
        <View style={styles.container}>
            <Link href="/login" style={styles.backButton}>
                <Text style={styles.backButtonText}>Volver</Text>
            </Link>
            <Text style={styles.header}>Crear Cuenta</Text>

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

            <Text style={styles.label}>Confirmar contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#8B8B8B"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

