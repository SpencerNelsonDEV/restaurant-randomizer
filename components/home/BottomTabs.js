import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function BottomTabs() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#b3e6b5",
      }}
    >
      <View
        style={{
          backgroundColor: "#b3e6b5",
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <Icon icon="shuffle-on" text="Random" />
        <Icon icon="restaurant" text="Browse" />
        <Icon icon="favorite" text="favorites" />
        <Icon icon="account-circle" text="Account" />
      </View>
    </TouchableOpacity>
  );
}

const Icon = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#b3e6b5",
    }}
  >
    <View
      style={{
        backgroundColor: "#b3e6b5",
      }}
    >
      <MaterialIcons
        name={props.icon}
        size={25}
        style={{
          backgroundColor: "#b3e6b5",
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
