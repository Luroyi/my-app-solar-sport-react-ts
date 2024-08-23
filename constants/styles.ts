// styles.ts
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import color from './Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100, // Para que el contenido comience cerca del borde superior
    position: 'relative',
    
  },
  backButton: {//volver
    position: 'absolute',
    top: 80,
    left: 20,
  },
  backButtonText: {//texto del boton volver
    fontSize: 16,
    color: '#FF6060',
    textDecorationLine: 'underline',
  
  },
  message: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    color: color.light.text,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 900
  } as TextStyle,
  label: {
    fontSize: 18,
    color: '#000000', // Asegúrate de que este color es negro
    marginBottom: 7,
  } as TextStyle,
  input: {
    backgroundColor: '#F6F6F6',
    borderColor: '#D9D9D9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: '#8B8B8B',
    fontSize: 16,
  } as TextStyle,
  button: {
    backgroundColor: '#FF6060',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 10,
    
  } as ViewStyle,
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    //fontFamily: 'Montserrat_700Bold',
    fontWeight: 'bold',
    
  },
  link: {
    fontSize: 18,
    color: '#FF6060',
    textDecorationLine: 'underline', // Esto es opcional si quieres subrayar el link
    marginVertical: 10,
  },
  registerLink: {
    fontSize: 14,
    color: '#FF6060',
    textAlign: 'center',
    marginTop: 20,
  },
  colorBlack:{
    color: color.light.text,
  },
  colorPrimary:{
    color: color.light.tint,
  },
  backgroundPrimary:{
    backgroundColor: color.light.tint,
  },
  fontSizeSmall: {
    fontSize: 12
  },
  fontSizeNormal: {
    fontSize: 16
  },
  fontSizeTitle: {
    fontSize: 24
  },
  marginBottom: {
    marginBottom:30
  },
  marginBottom1: {
    marginBottom:60
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
});

export default styles;