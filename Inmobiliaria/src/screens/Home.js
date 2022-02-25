import React from "react";
import { View } from "react-native";
import { CardHouse } from "../components/Card";


import { houses } from '../data/data'

export const Home = ({navigation}) => {
    return(
        <View>
            <CardHouse navigation={navigation}></CardHouse>
        </View>
    )
}