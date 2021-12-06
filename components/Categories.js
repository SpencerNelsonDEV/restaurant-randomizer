import React from "react";
import { Image, Text, ScrollView, View } from "react-native";

const items = [
  {
    image: require("../assets/images/breakfast.png"),
    text: "Breakfast",
  },
  {
    image: require("../assets/images/sandwich.png"),
    text: "Sandwich",
  },
  {
    image: require("../assets/images/ramen.png"),
    text: "Ramen",
  },
  {
    image: require("../assets/images/breakfast.png"),
    text: "Breakfast",
  },
  {
    image: require("../assets/images/sandwich.png"),
    text: "Sandwich",
  },
  {
    image: require("../assets/images/ramen.png"),
    text: "Ramen",
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", margin: 10 }}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image source={item.image} style={{ width: 50, height: 40, resizeMode: "contain" }} />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>{item.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
