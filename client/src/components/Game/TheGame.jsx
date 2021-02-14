import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import GameInfo from "./GameInfo";

const THEGAME_QUERY = gql`
  query TheGameQuery($queryId: Int!) {
    game(id: $queryId) {
      name
      released
      background_image
      rating
      reviews_count
      description_raw
      updated
      website
      reddit_url
      developers {
        name
      }
      publishers {
        name
      }
      genres {
        name
      }
      platforms {
        platform {
          name
        }
      }
      clip {
        clip
      }
    }
  }
`;

const TheGame = (props) => {
  let queryId = parseInt(props.match.params.id);
  return (
    <>
      <Query query={THEGAME_QUERY} variables={{ queryId }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            return <GameInfo data={data.game} />;
          }
        }}
      </Query>
    </>
  );
};

export default TheGame;
