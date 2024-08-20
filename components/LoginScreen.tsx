import auth from '@/credentials';
import { useNavigation } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";


const LoginScreen: React.FC = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        try{

            await signInWithEmailAndPassword(auth,email,password);
            
            Alert.alert("Success", "Inicio de sesión exitoso");
            //props.navigation.navigate('home');     
         } 
            catch (error: any){
            const {message} = error;

            Alert.alert("Error", message ? message : 'Error encontrado' );
        }
    };

    return(
        <View>
        <Text>Login</Text>
        <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize='none'
        />

        <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <Button title='Login' onPress={handleLogin} />
        </View>

    );
};

export default LoginScreen;


