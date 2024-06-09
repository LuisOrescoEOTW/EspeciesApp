import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TextNunitoSans } from './TextNunitoSans';
import { TEspecie } from '../services/especies.service';
import { themeColors } from '../theme/theme';
import { Link } from 'expo-router';

const { height } = Dimensions.get('window');

export function EspecieDetail({ especie }: { especie: TEspecie }) {
  // console.log(especie);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground>

          <View style={styles.textContainer}>
            <View>
              <TextNunitoSans style={styles.text}>ID </TextNunitoSans>
              <TextNunitoSans style={styles.text}>Reino</TextNunitoSans>
              <TextNunitoSans style={styles.text}>Phy/Div</TextNunitoSans>
              <TextNunitoSans style={styles.text}>Clase</TextNunitoSans>
              <TextNunitoSans style={styles.text}>Orden</TextNunitoSans>
              <TextNunitoSans style={styles.text}>Familia</TextNunitoSans>
              <TextNunitoSans style={styles.text}>Origen </TextNunitoSans>
            </View>
            <View>
              <TextNunitoSans style={styles.text2}>{especie.sp_id?? "-" }</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.reino?? "-"}</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.phydiv?? "-"}</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.clase?? "-"}</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.orden?? "-"}</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.familia?? "-"}</TextNunitoSans>
              <TextNunitoSans style={styles.text2}>{especie.origen?? "-"}</TextNunitoSans>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  textContainer: {
    flexDirection: 'row',
    height: 300,
    marginTop: 10,
    paddingTop: 30,
    marginLeft: 20
  },
  card: {
    height: height,
    backgroundColor: 'black',
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
  text: {
    color: '#BEDE61',
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 8
  },
  text2: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 8
  },

});
