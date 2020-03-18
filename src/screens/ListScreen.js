import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1",age: 25 },
    { name: "Friend #2",age: 26 },
    { name: "Friend #3",age: 27 },
    { name: "Friend #4",age: 28 },
    { name: "Friend #5",age: 29 },
    { name: "Friend #6",age: 30 },
    { name: "Friend #7",age: 31 },
    { name: "Friend #8",age: 32 },
    { name: "Friend #9",age: 33 },
    { name: "Friend #10",age: 34 }
  ];

  return (
    <FlatList
   // horizontal 
   // showsHorizontalScrollIndicator={false}
    keyExtractor={friend =>friend.name}
      data={friends}
      renderItem={ ({item}) => {
        // element === {item: {name: 'Friend #1'}, index:0}
        // element === {item: {name: 'Friend #1'}}
          return <Text style={styles.textStyle}>NAME: {item.name} - AGE: {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
textStyle: {
          marginVertical:50
}

});

export default ListScreen;
