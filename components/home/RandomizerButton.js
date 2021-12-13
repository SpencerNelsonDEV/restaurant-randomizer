import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function RandomizerButton(props) {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "#fceea7",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginTop: 20,
          marginBottom: 10,
          marginHorizontal: 10,
          padding: 13,
          borderRadius: 50,
        }}
        onPress={props.onPress}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={{ fontSize: 24, color: "black", marginRight: 18 }}>Something different?</Text>
          <FontAwesome5 name="dice" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
