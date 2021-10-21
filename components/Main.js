import React, { Component } from "react";
import Directory from "./Directory";
import { CAMPSITES } from "../shared/campsites";
// import FilmCatalogue from "./FilmCatalogue";

// class Main extends Component {
//   render() {
//     return (
//       <View>
//         <FilmCatalogue />
//       </View>
//     );
//   }
// }

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  render() {
    return <Directory campsites={this.state.campsites} />;
  }
}

export default Main;
