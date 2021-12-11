import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Bob's Breakfast",
    image_url:
      "https://images.squarespace-cdn.com/content/v1/544ab456e4b0f3ba72eb800a/1569522763669-CE7Z0PICNA9KHNDNEM7D/o.jpg",
    catigorys: ["Breakfast", "Lunch", "Dinner"],
    reviews: 540,
    rating: 3.9,
    price: "$",
  },
  {
    name: "Saintly Sandwich Shop",
    image_url:
      "https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/4:3/w_3000,h_2250,c_limit/Alo-Restaurant__2018_Raffi-Photo-2.jpg",
    catigorys: ["Sandwich", "Lunch", "Dinner"],
    revews: 765,
    rating: 4.1,
    price: "$",
  },
  {
    name: "Royal Ramen",
    image_url:
      "https://d1dxs113ar9ebd.cloudfront.net/225batonrouge/2020/11/BoruRamen-23-1.jpg?q=70&crop=faces&fit=crop&w=1300&h=600",
    catigorys: ["Ramen", "Japanese"],
    revews: 1245,
    rating: 4.8,
    price: "$",
  },
];

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }} activeOpacity={1}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 mins</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  );
};
