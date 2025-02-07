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
    paddingVertical: 10,
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
  } as TextStyle,
  link: {
    fontSize: 12,
    color: '#FF6060',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end', // Alinea el enlace a la derecha
    marginVertical: 10,
  } as TextStyle,
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
  weight800:{
    fontWeight: 800
  },
  weight400:{
    fontWeight: 400
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
});

export default styles;