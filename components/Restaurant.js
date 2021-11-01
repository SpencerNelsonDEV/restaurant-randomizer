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
        uri: "data:image/jpeg;base64,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",
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
