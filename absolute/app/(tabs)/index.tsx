import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    
    

      
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.imagem} 
      />

    
      <View style={styles.listaNomes}>
        <Text style={styles.nome}>Guilherme Castro Matias</Text>
        <Text style={styles.nome}>Miguel Arlindo da Cruz</Text>
        <Text style={styles.nome}>Renan Gabriel Lima da Silva</Text>
        <Text style={styles.nome}>Matheus Santos do Nascimento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, 
  },
  listaNomes: {
    alignItems: 'flex-start',
  },
  nome: {
    fontSize: 16,
    marginVertical: 5,
  },
});