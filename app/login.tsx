import styles from '@/constants/styles'; // Importando los estilos centralizados
import auth from '@/credentials';
import { useNavigation } from "@react-navigation/native";
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";


const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<any>();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Inicio de sesión exitoso");
            // navigation.navigate('home');
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

            <Link href="./register" style={[styles.link,styles.marginBottom]}>
            Olvidaste la contraseña 
            </Link>
            

            {/* Botón con bordes redondeados */}
            <TouchableOpacity style={[styles.button,styles.marginBottom1]} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            {/* Enlace para resgistrarse*/}

            <Link href="./register" style={[styles.colorBlack,{ textAlign: 'center'}]}>¿No tienes una cuenta? <Text style={[styles.colorPrimary, styles.weight800,{ textAlign: 'center'}]}>Regístrate</Text></Link>
        </View>
    );
};

export default login;
