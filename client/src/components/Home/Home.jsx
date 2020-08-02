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
        released
        background_image
        rating
      }
    }
  }
`;

const Home = ({ num, setPage, pageArray }) => {
  return (
    <>
      <h3>Hello Page</h3>
      <Query query={PAGE_QUERY} variables={{ num }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            return <HomeItem data={data} page={num} setPage={setPage} pageArray={pageArray} />;
          }
        }}
      </Query>
    </>
  );
};

export default Home;
