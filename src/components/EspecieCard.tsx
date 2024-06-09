import React, { FC } from 'react'
import { EspecieHome } from '../adapters/homeAdapters';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { TextNunitoSans } from "@/src/components/TextNunitoSans";
import { themeColors } from '../theme/theme';
import { useRouter } from 'expo-router';

type EspecieCardProps = {
    especie: EspecieHome;
};

//scrsry
//bysor: app instalr tambien en el celu.


export const EspecieCard: FC<EspecieCardProps> = ({ especie }) => {
    const { navigate } = useRouter();
    const handlePress = () => {
        navigate({
            pathname: "especie/[especieId]",
            params: {
                especieId: especie.sp_id,
            }
        })
    };
    return (
        <Pressable onPress={handlePress} style={styles.card}>
            {/* <View> */}
            {especie.imagen ? (
                <Image source={{ uri: especie.imagen }} style={styles.image} />
            ) : (
                <Image source={require('@/assets/images/placeholder.png')} style={styles.image} />
            )}
            <TextNunitoSans style={styles.title} numberOfLines={1} ellipsizeMode="tail" >{especie.nombre_cientifico}</TextNunitoSans>
            {/* </View> */}
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
    title: {
        fontSize: 13,
        color: themeColors.textBase,
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
    },
});
