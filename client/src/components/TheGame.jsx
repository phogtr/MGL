import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const THEGAME_QUERY = gql`
  query TheGameQuery($id: Int!) {
    game(id: $id) {
      name
      released
      background_image
      rating
      reviews_count
      updated
      developers {
        name
      }
    }
  }
`;

const TheGame = (props) => {
  let game = props.match.params;
  console.log(game.name, game.id);
  return (
    <div>
      <h3>Game Title</h3>
    </div>
  );
};

export default TheGame;
