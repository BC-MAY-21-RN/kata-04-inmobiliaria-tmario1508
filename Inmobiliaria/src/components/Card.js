import { View, StyleSheet } from "react-native";
import React from "react";
import { ImageHouse } from "./ImageHouse";
import { HouseProperties } from "./HouseProperties";


export const CardHouse = ( {house} ) => {
    return(
        <View style={styles.sectionContainer}>
            <ImageHouse 
                img={house.img} rating={house.rating} 
            />
            <HouseProperties 
                name={house.name} 
                direction={house.direction}
                bathrooms={house.bathrooms}
                beds={house.beds} 
                size={house.size}
                price={house.price}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 15,
      paddingHorizontal: 24,
      flexDirection: 'row',
      backgroundColor: '#EBF5FB',
      borderRadius: 10,
      justifyContent: 'center',
      margin: 10,
    },
    
  });