import React from 'react'
import { StyleSheet } from 'react-native';
import { themeColors } from '../theme/theme';
import { TextNunitoSans } from './TextNunitoSans';

export const HomeFilter = ({ filter, name }: any) => {
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


//DE LEO************************************************************************
// import { TextNunitoSans } from "@/src/components/TextNunitoSans";
// import { TReino } from "@/src/services/especies.service";
// import { themeColors } from "@/src/theme/theme";
// import { FC } from "react";
// import { StyleSheet, View } from "react-native";

// type HomeFilterProps = { filter: TReino | null; name: TReino | null };
// export const HomeFilter: FC<HomeFilterProps> = ({ filter, name }) => {
//   return (
//     <View
//       style={[
//         styles.borderBottom,
//         filter === name
//           ? styles.borderBottomActive
//           : styles.borderBottomInactive,
//       ]}
//     >
//       <TextNunitoSans>{name === null ? "TODOS" : name}</TextNunitoSans>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   borderBottom: {
//     borderBottomWidth: 1,
//   },
//   borderBottomInactive: {
//     borderBottomColor: themeColors.screenBackground,
//   },
//   borderBottomActive: {
//     borderBottomColor: themeColors.primary,
//   },
// });
