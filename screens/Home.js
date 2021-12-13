import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, { localRestaurants } from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import RandomizerButton from "../components/home/RandomizerButton";
import { YELP_API_KEY } from "../config/";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState(localRestaurants);
  const [limit, setLimit] = useState("limit=0");

  const getRandomRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&${limit}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    fetch(yelpUrl, apiOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        const randomRestaurant = responseJson.businesses[0];
        return randomRestaurant;
      });

    fetch(yelpUrl, apiOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        const randomRestaurant =
          responseJson.businesses[Math.floor(Math.random() * responseJson.businesses.length)];
        setRestaurantData([randomRestaurant]);
      });
  };

  useEffect(() => {
    getRandomRestaurantFromYelp();
  }, [city, limit]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#cbe4f9", padding: 15 }}>
        <SearchBar cityHandler={setCity} />
      </View>
      {restaurantData.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
          <RandomizerButton onPress={() => getRandomRestaurantFromYelp()} />
        </ScrollView>
      ) : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              fontSize: 30,
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              margin: 20,
              padding: 20,
              marginRight: 80,
              marginTop: 100,
            }}
          >
            Having a hard time deciding where to eat?
          </Text>
          <Text
            style={{
              backgroundColor: "white",
              borderRadius: 50,
              fontSize: 30,
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
              margin: 20,
              padding: 20,
              marginLeft: 80,
            }}
          >
            Begin by searching for a city!
          </Text>
        </View>
      )}
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
