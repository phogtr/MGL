import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import EachItem from "../Items/EachItem";
import "./Filter.css";

const FILTER_QUERY = gql`
  query FilterQuery($num: Int!, $filter: String!) {
    filter(num: $num, name: $filter) {
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

const FilterQuery = ({ num, filter, setPage, pageArray, nameComps }) => {
  return (
    <>
      <h3 className="filter-header">Searching results: {String(filter).toUpperCase()}</h3>
      <Query query={FILTER_QUERY} variables={{ num, filter }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            return (
              <EachItem
                name={filter}
                data={data.filter.results}
                page={num}
                setPage={setPage}
                pageArray={pageArray}
                nameComps={nameComps}
              />
            );
          }
        }}
      </Query>
    </>
  );
};

export default FilterQuery;
