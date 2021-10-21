import React, { Component } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { ListItem, Card } from "react-native-elements";
import { FILMS } from "../shared/films.js";

class FilmCatalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: FILMS,
    };
  }
  render() {
    const renderFilm = ({ item }) => {
      return (
        <ListItem
          title={
            <View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          }
          subtitle={
            <View style={styles.container}>
              <Text style={styles.list}>{item.director}</Text>
              <Text style={styles.list}>{item.category}</Text>
              <Text style={styles.list}>{item.language}</Text>
              <Text style={styles.list}>{item.year}</Text>
              <Text style={styles.review}>{item.review}</Text>
            </View>
          }
        />
      );
    };
    return (
      <Card title="Film Catalogue">
        <FlatList
          data={this.state.films}
          renderItem={renderFilm}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 9,
    // width: "100%",
    // backgroundColor: "whitesmoke",
    // padding: 10,
  },
  title: {
    // fontSize: 16,
    // fontWeight: "bold",
  },
  review: {
    // color: "grey",
    // fontSize: 12,
    // paddingTop: 20,
  },
  list: {
    // paddingTop: 3,
  },
});

export default FilmCatalogue;
