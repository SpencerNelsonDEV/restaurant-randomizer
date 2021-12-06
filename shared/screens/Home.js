import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../../components/HeaderTabs";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import RestaurantItems from "../../components/RestaurantItems";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </SafeAreaView>
  );
}
