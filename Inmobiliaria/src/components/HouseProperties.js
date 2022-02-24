import { Text, Image, View, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

const imgBano = require('../img/banos.png');
const imgPlano = require('../img/plano.png');
const imgCama = require('../img/cama.png');

export const HouseProperties = () => {

    return(
        <View style={styles.houseProperties} >
            <View style={styles.titleHouse} >
                <Text style={styles.titleText} >The Willows</Text>
            </View>
            <View style={styles.houseDirection} >
                <Icon name="location-outline" size={25} color="#000" />
                <Text style={styles.textDirection} >3517 W. Gray St. Utica</Text>
            </View>
            <View style={styles.houseInfo}>
                <Image source={imgCama} style={styles.imageIcon}></Image>
                <Text style={styles.textC}>3</Text>
                <Image source={imgBano} style={styles.imageIcon}></Image>
                <Text style={styles.textC}>2</Text>
                <Image source={imgPlano} style={styles.imageIcon}></Image>
                <Text style={styles.textCFt}>230 ft</Text>
                <Text style={styles.ftC}>2</Text>
            </View>
            <View style={styles.housePrice} >
                <Text style={styles.textPrice}>$440/m</Text>
                <Icon name="heart-circle" color="green" size={30} style={styles.iconFav} />
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    houseProperties: {
        marginStart: 10,
        
    },
    titleHouse: {
        paddingTop: 5,
        fontFamily: 'Arial',
    },
    titleText: {
        fontSize: 22,
        paddingStart: 10,
        color: '#000',
    },
    houseDirection: {
        flexDirection: 'row',
        margin: 2,
    },
    textDirection: {
        paddingTop: 2,
        paddingStart: 4,
    },
    imageIcon: {
        height: 30,
        width: 30,
        margin: 5,
    },
    textC: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 9,
        marginRight: 8,
        marginLeft: 4,
    },
    textCFt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 9,
        marginLeft: 4,
    },
    houseInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 2,
    },
    housePrice: {
        flexDirection: 'row',
        margin: 2,
        justifyContent: 'space-between',
        
    },
    textPrice: {
        fontSize: 20,
        color: '#000',
        paddingStart: 5,
    },
    iconFav: {
        marginBottom: 10,
    },
    ftC: {
        fontSize: 10,
        paddingTop: 6,
        color: '#000',
        fontWeight: 'bold',
    },
})