import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Pressable } from 'react-native';
import { TextNunitoSans } from './TextNunitoSans';
import { TEspecie } from '../services/especies.service';
import { themeColors } from '../theme/theme';
import { Link, useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export function EspecieDetail({ especie }: { especie: TEspecie }) {
  const { navigate } = useRouter();
  const handlePress = () => {
    navigate({
      pathname: "/report",
    })
  };

  return (
    <View style={styles.container}>
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
          <TextNunitoSans style={styles.text2}>{especie.sp_id ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.reino ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.phydiv ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.clase ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.orden ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.familia ?? "-"}</TextNunitoSans>
          <TextNunitoSans style={styles.text2}>{especie.origen ?? "-"}</TextNunitoSans>
        </View>
      </View>
      <View style={styles.general}>
        <Pressable onPress={handlePress} style={styles.boton}>
          <TextNunitoSans style={styles.textBoton}>Reportar Avistaje</TextNunitoSans>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    height: height,
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowRadius: 20,
    elevation: 3,
  },
  textContainer: {
    flexDirection: 'row',
    height: 300,
    marginTop: 10,
    paddingTop: 30,
    marginLeft: 20
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
  general: {
    flex: 1,
    alignContent: "center",
  },
  boton: {
    backgroundColor: "#BEDE61",
    margin: 40,
    padding: 10,
    borderRadius: 30,
    color: "#FFFFFF"

  },
  textBoton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
});
