import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TextNunitoSans } from './TextNunitoSans';
import { TEspecie } from '../services/especies.service';
import { themeColors } from '../theme/theme';

const { height } = Dimensions.get('window');

export function EspecieHeader({ especie }: { especie: TEspecie }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={especie.imagen ? { uri: especie.imagen } : require('@/assets/images/placeholder.png')}
          style={styles.image}
          imageStyle={{ borderRadius: 20 }} // Aplica el borde redondeado a la imagen
        >
          <View style={styles.textContainer}>
            <TextNunitoSans style={styles.text}>{especie.nombre_cientifico}</TextNunitoSans>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
});

{/* <LinearGradient
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          colors={[
            // "rgba(48, 49, 45, 1)",
            // "rgba(48, 49, 45, 0.9)",
            // "rgba(30, 31, 24, 0)",
          ]}
          locations={[0, 0.34, 0.68]}
          style={{
            height: 300,
            justifyContent: "flex-end",
            paddingBottom: 40,
            paddingHorizontal: 10,
          }}
        > */}
{/* </LinearGradient> */ }
{/* </ImageBackground> */ }
