import React from "react";
import { View, Text, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function About(props) {
  const { name, image, phone, reviews, rating, categories, address } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} • ${rating} ⭐ (${reviews}+) `;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
      <RestaurantContact phone={phone} address={address} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);

const RestaurantContact = (props) => (
  <View
    style={{
      marginHorizontal: 15,
    }}
  >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 13, color: "black" }}>{props.phone}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons name="cellphone-iphone" size={20} color="#000" />
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 13, color: "black" }}>{props.address}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="location-pin" size={20} color="#000" />
      </View>
    </View>
  </View>
);
