import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { houses } from "../data/data";
import { CardHouse } from "./Card";
import Icon from 'react-native-vector-icons/Ionicons';

export const ListHouses = () => {
    const dataHouses = houses;

    const renderHouses = ({ item }) => (
        <CardHouse 
            house={item}
        />
    )

    return (
        <View>
            <View style={styles.contentList}>
                <Icon name="home" size={35} color="#2E86C1" />
                <Text style={styles.txtTitle}> List Houses</Text>
            </View>
            <FlatList 
                data={ dataHouses } 
                renderItem= {renderHouses}
                keyExtractor={item => item.id}
                horizontal={false}
                style={styles.listContainer} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contentList: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#b7b7b7',
    },
    txtTitle: {
        color: '#2E86C1',
        fontSize: 25,
    },
    listContainer: {
        marginBottom: 100,
    },
    
  });


