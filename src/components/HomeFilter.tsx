import React from 'react'
import { EspecieHome } from '../adapters/homeAdapters';
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';
import { TextNunitoSans } from './TextNunitoSans';

export const HomeFilter = ({ filter, name }: any) => {
  console.log(filter); //Es el nombre seleccionado
  console.log(name);  //Vienen todos los nombres
  return (
    <TextNunitoSans
      style={[styles.title, filter === name && styles.select]}
      numberOfLines={1}
      ellipsizeMode="tail" >
      {name}
    </TextNunitoSans>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: themeColors.textBase,
    margin: 10,
    textAlign: 'center',
    width: '100%',
  },
  select: {
    borderBottomWidth: 2,
    borderBottomColor: '#BEDE61',
  }
});