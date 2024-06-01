import React, { FC } from 'react';
import { EspecieHome } from '../adapters/homeAdapters';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { themeColors } from '../theme/theme';

type EspeciesListProps = {
  especies: EspecieHome[];
};

const EspecieCard: FC<{especie: EspecieHome}> = ({especie}) => (
  <View style={styles.card}>
    {especie.imagen ? (
      <Image source={{ uri: especie.imagen }} style={styles.image} />
    ) : (
      <Image source={require('@/assets/images/placeholder.png')} style={styles.image} />
    )}
    <TextNunitoSans style={styles.title} numberOfLines={1} ellipsizeMode="tail" >{especie.nombre_cientifico}</TextNunitoSans>
    {/* <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
      {especie.nombre_cientifico}
    </Text> */}
  </View>
);

export const EspecieList: FC<EspeciesListProps> = ({ especies }) => {
  return (
    <FlatList
      data={especies}
      renderItem={({ item }) => <EspecieCard especie={item} />}
      keyExtractor={(item) => item.sp_id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#363636',
    borderRadius: 10,
    padding: 5,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  noImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    color: themeColors.textBase,
    marginTop: 10,
    textAlign: 'center',
    width: '100%',
  },
});
