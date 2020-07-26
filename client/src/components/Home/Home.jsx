import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HomeItem from "./HomeItem";

const PAGE_QUERY = gql`
  query PageQuery($num: Int!) {
    page(num: $num) {
      results {
        id
        name
      }
    }
  }
`;

const Home = ({ num }) => {
  return (
    <>
      <h3>Hello Page</h3>
      <Query query={PAGE_QUERY} variables={{ num }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return data.page.results.map((game) => <HomeItem key={game.id} game={game} />);
        }}
      </Query>
    </>
  );
};

export default Home;
