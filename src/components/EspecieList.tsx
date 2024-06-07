import React, { FC } from 'react';
import { EspecieHome } from '../adapters/homeAdapters';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { themeColors } from '../theme/theme';
import { EspecieCard } from './EspecieCard';

type EspeciesListProps = {
  especies: EspecieHome[];
};

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
});
