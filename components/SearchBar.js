import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{ width: "100%", marginTop: 0, flexDirection: "row", padding: 15 }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyCYeH2JJpael-6Gktw9wXsFuYLIc7Dip_U" }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        placeholder="search"
        styles={{
          textInput: {
            backgroundColor: "whitesmoke",
            borderRadius: 20,
            fontWeight: "bold",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "white",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <Text
            style={{
              marginRight: 8,
              flexDirection: "row",
              backgroundColor: "lightgray",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              alignItems: "center",
              padding: 10,
              paddingRight: 22,
              paddingLeft: 22,
            }}
          >
            {/* <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} /> */}
            Search
          </Text>
        )}
      />
    </View>
  );
}
