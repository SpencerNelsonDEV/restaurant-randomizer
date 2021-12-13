import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems, { reviews } from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail({ route, navigation }) {
  const getReviewsFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/${id}/reviews`;
  };

  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView>
        <MenuItems route={route} />
      </ScrollView>
    </>
  );
}
