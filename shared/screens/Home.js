import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../../components/home/HeaderTabs";
import SearchBar from "../../components/home/SearchBar";
import Categories from "../../components/home/Categories";
import BottomTabs from "../../components/home/BottomTabs";
import RestaurantItems, { localRestaurants } from "../../components/home/RestaurantItems";
import { Divider } from "react-native-elements/dist/divider/Divider";

const Yelp_API_KEY =
  "b2Wuzx8kj1Vaaf1ObRaESYm1ZUxnha6NqQTUQAki6Hd15IRco-B-P4KuVQTDk69iblUlKfTb6pI7WfUy86ewa8qw-TmRcd5CfWd3DvjWQUiwYIraWz2WAFka61hzYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Corvallis");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?location=${city}&limit=9`;

    const apiOptions = {
      method: "GET",
      headers: { Authorization: `Bearer ${Yelp_API_KEY}` },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
