import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", backgroundColor: "#cbe4f9" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCYeH2JJpael-6Gktw9wXsFuYLIc7Dip_U" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description;
          cityHandler(city);
        }}
        placeholder="First search for a city"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            fontSize: 24,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 33 }}>
            <FontAwesome5 name="search-location" size={24} />
          </View>
        )}
      />
    </View>
  );
}
