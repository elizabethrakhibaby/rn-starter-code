import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";


const ListScreen = function() {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 21},
        {name: 'Friend 3', age: 22}
    ];


    return (
        <FlatList
        keyExtractor={ item => item.name}
        data = {friends}
        renderItem={ ({item}) => {
            return (
                <View style={{ backgroundColor: 'paleyellow', flex: 1, width:260 }}>
            <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text> 
            </View>
            ); 
        }
        }
        />
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'green',
  },
});

export default ListScreen;