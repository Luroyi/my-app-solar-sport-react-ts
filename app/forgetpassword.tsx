import styles from '@/constants/styles';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");

    const handleSendCode = () => {
        if (email) {
            Alert.alert("Código enviado", "Revisa tu correo electrónico para continuar");
            // Navegar a la pantalla de recuperación de contraseña si es necesario
        } else {
            Alert.alert("Error", "Por favor, introduce tu correo electrónico.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>
                Para restablecer su contraseña, ingrese su dirección de correo electrónico, por favor.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#8B8B8B"
            />
            <TouchableOpacity style={styles.button} onPress={handleSendCode}>
                <Text style={styles.buttonText}>Enviar código</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgetPassword;
