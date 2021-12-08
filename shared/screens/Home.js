import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../../components/HeaderTabs";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import RestaurantItems, { localRestaurants } from "../../components/RestaurantItems";

const Yelp_API_KEY =
  "b2Wuzx8kj1Vaaf1ObRaESYm1ZUxnha6NqQTUQAki6Hd15IRco-B-P4KuVQTDk69iblUlKfTb6pI7WfUy86ewa8qw-TmRcd5CfWd3DvjWQUiwYIraWz2WAFka61hzYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=corvallis";

    const apiOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${Yelp_API_KEY}` },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
