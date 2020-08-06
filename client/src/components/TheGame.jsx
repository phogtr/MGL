import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const THEGAME_QUERY = gql`
  query TheGameQuery($name: String!) {
    game(name: $name) {
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
  console.log(props.match.params);
  return (
    <div>
      <h3>Game Title</h3>
    </div>
  );
};

export default TheGame;
