import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import EachItem from "../Items/EachItem";
import ReleasedReview from "./ReleasedReview";

const RELEASED_QUERY = gql`
  query ReleasedQuery($from: String!, $to: String!, $num: Int!) {
    released(dateFrom: $from, dateTo: $to, num: $num) {
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

const ReleasedQuery = ({
  num,
  release,
  setRelease,
  setPage,
  pageArray,
  nameComps,
  setNameComps,
}) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  month = month !== 1 ? month - 1 : month;
  let stringMonth = String(month).padStart(2, "0");
  let from = year + "-" + stringMonth + "-01"; // 2021-02-01
  let to = "";
  if (month === 2) {
    to = year + "-02-28"; // 2021-02-28
  } else if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    to = year + "-" + stringMonth + "-31"; // 2021-03-31
  } else {
    to = year + "-" + stringMonth + "-30"; // 2021-11-30
  }

  return (
    <>
      {release === 0 ? "" : <h3 className="item-header">Recent Released</h3>}
      <Query query={RELEASED_QUERY} variables={{ from, to, num }}>
        {({ loading, error, data }) => {
          if (loading) return <></>;
          if (error) {
            console.log(error);
            return <h4>No Data available</h4>;
          } else {
            if (release === 0) {
              return (
                <ReleasedReview
                  release={release}
                  setRelease={setRelease}
                  data={data.released.results}
                  setNameComps={setNameComps}
                />
              );
            } else {
              let name = undefined;
              return (
                <EachItem
                  name={name}
                  count={data.released.count}
                  data={data.released.results}
                  page={num}
                  setPage={setPage}
                  pageArray={pageArray}
                  nameComps={nameComps}
                />
              );
            }
          }
        }}
      </Query>
    </>
  );
};

export default ReleasedQuery;
