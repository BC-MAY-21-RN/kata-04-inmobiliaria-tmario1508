import React from "react";
import { FlatList, View, Text } from "react-native";
import { houses } from "../data/data";
import { CardHouse } from "./Card";

export const ListHouses = () => {
    const dataHouses = houses;

    const renderHouses = ({ item }) => (
        <CardHouse 
            house={item}
        />
    )

    return (
        <View>
            <Text>List houses</Text>
            <FlatList 
                data={ dataHouses } 
                renderItem= {renderHouses}
                keyExtractor={item => item.id}
                horizontal={false} 
            />
        </View>
    )
}


