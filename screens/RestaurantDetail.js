import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import ReviewItems, { localReviews } from "../components/restaurantDetail/ReviewItems";
import { YELP_API_KEY } from "../config/";

export default function RestaurantDetail({ navigation, route }) {
  return (
    <>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView>
        <ReviewItems route={route} />
      </ScrollView>
    </>
  );
}
