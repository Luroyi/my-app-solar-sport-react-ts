import styles from '@/constants/styles';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡TE DAMOS LA BIENVENIDA!</Text>
      <Link href="/login" style={[styles.button, styles.marginBottom1]}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </Link>
      <Link href="/registro" style={[styles.button, styles.marginBottom1]}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Link>
    </View>
  );
};

export default LandingScreen;
