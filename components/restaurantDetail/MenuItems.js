import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const reviews = [
  {
    "rating": 5,
    "user": {
      "id": "W8UK02IDdRS2GL_66fuq6w",
      "profile_url": "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
      "image_url": "https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg",
      "name": "Ella A.",
    },
    "text":
      "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...",
    "time_created": "2016-08-29 00:41:13",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
  {
    "id": "1JNmYjJXr9ZbsfZUAgkeXQ",
    "rating": 4,
    "user": {
      "id": "rk-MwIUejOj6LWFkBwZ98Q",
      "profile_url": "https://www.yelp.com/user_details?userid=rk-MwIUejOj6LWFkBwZ98Q",
      "image_url": null,
      "name": "Yanni L.",
    },
    "text":
      'The "restaurant" is inside a small deli so there is no sit down area. Just grab and go.\n\nInside, they sell individually packaged ingredients so that you can...',
    "time_created": "2016-09-28 08:55:29",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=fj87uymFDJbq0Cy5hXTHIA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
  {
    "rating": 5,
    "user": {
      "id": "W8UK02IDdRS2GL_66fuq6w",
      "profile_url": "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
      "image_url": "https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg",
      "name": "Ella A.",
    },
    "text":
      "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...",
    "time_created": "2016-08-29 00:41:13",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
  {
    "id": "1JNmYjJXr9ZbsfZUAgkeXQ",
    "rating": 4,
    "user": {
      "id": "rk-MwIUejOj6LWFkBwZ98Q",
      "profile_url": "https://www.yelp.com/user_details?userid=rk-MwIUejOj6LWFkBwZ98Q",
      "image_url": null,
      "name": "Yanni L.",
    },
    "text":
      'The "restaurant" is inside a small deli so there is no sit down area. Just grab and go.\n\nInside, they sell individually packaged ingredients so that you can...',
    "time_created": "2016-09-28 08:55:29",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=fj87uymFDJbq0Cy5hXTHIA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
  {
    "rating": 5,
    "user": {
      "id": "W8UK02IDdRS2GL_66fuq6w",
      "profile_url": "https://www.yelp.com/user_details?userid=W8UK02IDdRS2GL_66fuq6w",
      "image_url": "https://s3-media3.fl.yelpcdn.com/photo/iwoAD12zkONZxJ94ChAaMg/o.jpg",
      "name": "Ella A.",
    },
    "text":
      "Went back again to this place since the last time i visited the bay area 5 months ago, and nothing has changed. Still the sketchy Mission, Still the cashier...",
    "time_created": "2016-08-29 00:41:13",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=hp8hAJ-AnlpqxCCu7kyCWA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
  {
    "id": "1JNmYjJXr9ZbsfZUAgkeXQ",
    "rating": 4,
    "user": {
      "id": "rk-MwIUejOj6LWFkBwZ98Q",
      "profile_url": "https://www.yelp.com/user_details?userid=rk-MwIUejOj6LWFkBwZ98Q",
      "image_url": null,
      "name": "Yanni L.",
    },
    "text":
      'The "restaurant" is inside a small deli so there is no sit down area. Just grab and go.\n\nInside, they sell individually packaged ingredients so that you can...',
    "time_created": "2016-09-28 08:55:29",
    "url":
      "https://www.yelp.com/biz/la-palma-mexicatessen-san-francisco?hrid=fj87uymFDJbq0Cy5hXTHIA&adjust_creative=0sidDfoTIHle5vvHEBvF0w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=0sidDfoTIHle5vvHEBvF0w",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  userStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {reviews.map((reviews, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <ReviewInfo review={reviews} />
            <ReviewImage review={reviews} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const ReviewInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.userStyle}>{props.review.user.name}</Text>
    <Text>{props.review.text}</Text>
    <Text>{props.review.rating}</Text>
  </View>
);

const ReviewImage = (props) => (
  <View>
    <Image
      source={{ uri: props.review.user.image_url }}
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
