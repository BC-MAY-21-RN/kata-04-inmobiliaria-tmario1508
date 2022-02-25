import { Text, ImageBackground, View, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

export const ImageHouse = ({img, rating}) => {
    return(
        <View style={styles.imageHouse}>
            <ImageBackground source={img} style={styles.houseBackground} imageStyle={styles.imageBackground} >
                <View style={styles.scoreContainer}>
                   <Icon name="star" color='#D68910' size={20} />
                   <Text style={styles.numScore}>{rating}</Text>
                </View>

            </ImageBackground>
        </View>
        
    );
}

const styles = StyleSheet.create({
    imageHouse: {
        paddingTop: 10,
    },
    houseBackground: {
        width: 130,
        height: 130,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    imageBackground: {
        borderRadius: 10,
        paddingTop: 8,
    },
    numScore: {
        color: '#6E2C00',
        fontWeight: 'bold',
        opacity: 0.5,
    },
    scoreContainer: {
        backgroundColor: '#d7c6b1',
        height: 30,
        width: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 50,
        alignItems: 'center',
        margin: 10,
    },

})