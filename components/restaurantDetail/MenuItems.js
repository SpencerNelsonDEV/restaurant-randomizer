import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "biscuits and gravy",
    description: "our famous biscuits and gravy with two eggs and your choice of bacon or sausage",
    price: "$12.50",
    image:
      "https://thumbor.thedailymeal.com/p_4041xLQDwbK2e3Un3ou_o6aAQ=//https://www.thedailymeal.com/sites/default/files/2019/11/21/Chain_Breakfast_Hero_Shutterstock.jpg",
  },
  {
    title: '"the baconator"',
    description: "baconator breakfest sandwich and your choice of side",
    price: "$14.50",
    image:
      "https://images.squarespace-cdn.com/content/v1/544ab456e4b0f3ba72eb800a/1569522763669-CE7Z0PICNA9KHNDNEM7D/o.jpg",
  },
  {
    title: "the sausage queen",
    description: "our sausage landslide and two eggs",
    price: "$11.00",
    image:
      "https://thumbor.thedailymeal.com/p_4041xLQDwbK2e3Un3ou_o6aAQ=//https://www.thedailymeal.com/sites/default/files/2019/11/21/Chain_Breakfast_Hero_Shutterstock.jpg",
  },
  {
    title: '"the baconator"',
    description: "baconator breakfest sandwich and your choice of side",
    price: "$14.50",
    image:
      "https://images.squarespace-cdn.com/content/v1/544ab456e4b0f3ba72eb800a/1569522763669-CE7Z0PICNA9KHNDNEM7D/o.jpg",
  },
  {
    title: "biscuits and gravy",
    description: "our famous biscuits and gravy with two eggs and your choice of bacon or sausage",
    price: "$12.50",
    image:
      "https://thumbor.thedailymeal.com/p_4041xLQDwbK2e3Un3ou_o6aAQ=//https://www.thedailymeal.com/sites/default/files/2019/11/21/Chain_Breakfast_Hero_Shutterstock.jpg",
  },
  {
    title: '"the baconator"',
    description: "baconator breakfest sandwich and your choice of side",
    price: "$14.50",
    image:
      "https://images.squarespace-cdn.com/content/v1/544ab456e4b0f3ba72eb800a/1569522763669-CE7Z0PICNA9KHNDNEM7D/o.jpg",
  },
  {
    title: "the sausage queen",
    description: "our sausage landslide and two eggs",
    price: "$11.00",
    image:
      "https://thumbor.thedailymeal.com/p_4041xLQDwbK2e3Un3ou_o6aAQ=//https://www.thedailymeal.com/sites/default/files/2019/11/21/Chain_Breakfast_Hero_Shutterstock.jpg",
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}
    />
  </View>
);
