import React from "react";
import { FlatList } from "react-native";
import { ListItem, Card } from "react-native-elements";

function Directory(props) {
  const renderDirectoryItem = ({ item }) => {
    return (
      <Card>
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require("./images/react-lake.jpg") }}
        />
      </Card>
    );
  };

  return (
    <FlatList
      data={props.campsites}
      renderItem={renderDirectoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Directory;
