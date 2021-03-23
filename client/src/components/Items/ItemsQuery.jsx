import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import EachItem from "./EachItem";
import "./Items.css";

const PAGE_QUERY = gql`
  query PageQuery($num: Int!) {
    page(num: $num) {
      count
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

const ItemsQuery = ({ num, setPage, pageArray }) => {
  return (
    <>
      <h3 className="item-header">All Games</h3>
      <Query query={PAGE_QUERY} variables={{ num }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            let name = undefined;
            return (
              <EachItem
                name={name}
                count={data.page.count}
                data={data.page.results}
                page={num}
                setPage={setPage}
                pageArray={pageArray}
              />
            );
          }
        }}
      </Query>
    </>
  );
};

export default ItemsQuery;
