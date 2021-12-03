import React from "react";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-elements";

export default function Restaurant() {
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
        uri: "https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/4:3/w_3000,h_2250,c_limit/Alo-Restaurant__2018_Raffi-Photo-2.jpg",
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
