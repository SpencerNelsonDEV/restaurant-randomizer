import React from "react";
import { ScrollView } from "react-native";
import SearchBar from "./SearchBar";
import Restaurant from "./Restaurant";
import Restaurant2 from "./Restaurant2";

export default function Main() {
  return (
    <ScrollView style={{ backgroundColor: "#eee", flex: 1 }}>
      <SearchBar />
      <Restaurant />
      <Restaurant2 />
      <Restaurant />
    </ScrollView>
  );
}
