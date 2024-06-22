import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Pressable } from 'react-native';
import { TextNunitoSans } from './TextNunitoSans';
import { TEspecie } from '../services/especies.service';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export function EspecieHeader({ especie }: { especie: TEspecie }) {
  const { back } = useRouter();


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={especie.imagen ? { uri: especie.imagen } : require('@/assets/images/placeholder.png')}
          style={styles.image}
          imageStyle={{ borderRadius: 20 }} // Aplica el borde redondeado a la imagen
        >
          <View style={styles.icon}>
            <View style={styles.iconUno}>
              <Pressable onPress={back}>
                <AntDesign name="left" size={24} color="black" />
              </Pressable>
            </View>
            <View style={styles.iconDos} />
            <View style={styles.iconTres}>
              <AntDesign name="heart" size={20} color="red" />
              <TextNunitoSans style={styles.likesText}>0 likes</TextNunitoSans>
            </View>
          </View>
          <LinearGradient
            start={{ x: 0.6, y: 1 }}
            end={{ x: 0.6, y: 0 }}
            colors={[
              "rgba(48, 49, 45, 1)",
              "rgba(48, 49, 45, 0.8)",
              "rgba(30, 31, 24, 0)",
            ]}
            // locations={[0, 0.35, 0.7]} 
            locations={[0, 0.35, 0.7]}
            style={{
              height: 300,
              justifyContent: "flex-end",
              paddingBottom: 40,
              paddingHorizontal: 10,
            }}
          >
            <View>
              <TextNunitoSans style={styles.text}>{especie.nombre_cientifico}</TextNunitoSans>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  card: {
    height: height * 0.45,
    backgroundColor: '#363636',
    borderRadius: 20,
    margin: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 20,
    elevation: 3,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  icon: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  iconUno: {
    flex: 0.08,
    backgroundColor: '#FFF',
    borderRadius: 30,
  },
  iconDos: {
    flex: 0.63,
  },
  iconTres: {
    flex: 0.3,
    backgroundColor: '#FFF',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesText: {
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});
