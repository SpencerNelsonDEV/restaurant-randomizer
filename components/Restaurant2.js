import React from "react";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-elements";

export default function Restaurant2() {
  return (
    <Card>
      <Text style={{ paddingBottom: 12 }}>Restaurant Component</Text>
      <RestaurantImage />
      <RestaurantInfo />
    </Card>
  );
}

const RestaurantImage = () => {
  return (
    <Image
      source={{
        uri: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
      }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantInfo = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
      <Text>Bob's Yummy Burgers</Text>
      <Text>30-45 mins</Text>
      <Text>4.5</Text>
    </View>
  );
};
