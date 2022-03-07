import React from "react";
import { View } from "react-native";
import { ListHouses } from "../components/ListHouses";


import { houses } from '../data/data'

export const Home = ({navigation}) => {
    return(
        <View>
            <ListHouses />
        </View>
    )
}