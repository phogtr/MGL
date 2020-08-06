import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const THEGAME_QUERY = gql`
  query TheGameQuery($queryId: Int!) {
    game(id: $queryId) {
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
  let queryId = parseInt(game.id);
  return (
    <>
      <h3>Game Title</h3>
      <Query query={THEGAME_QUERY} variables={{ queryId }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            return <h3>Test</h3>;
          }
        }}
      </Query>
    </>
  );
};

export default TheGame;
