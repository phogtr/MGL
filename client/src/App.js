import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FilterQuery, FilterForm, ItemsQuery, Navbar, TheGame, ReleasedQuery } from "./components";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [urlName, setUrlName] = useState("");
  const [pageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [release, setRelease] = useState(0);
  const [nameComps, setNameComps] = useState("");

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar
          setPage={setPage}
          setFilter={setFilter}
          setUrlName={setUrlName}
          pageArray={pageArray}
          setRelease={setRelease}
          setNameComps={setNameComps}
        />
        <div className="container">
          <FilterForm
            setUrlName={setUrlName}
            pageArray={pageArray}
            setPage={setPage}
            filter={filter}
            setFilter={setFilter}
            setRelease={setRelease}
            setNameComps={setNameComps}
          />
          <Switch>
            <ReleasedQuery
              exact
              path={"/"}
              release={release}
              setRelease={setRelease}
              num={page}
              setPage={setPage}
              pageArray={pageArray}
              nameComps={nameComps}
              setNameComps={setNameComps}
            />
            <ReleasedQuery
              exact
              path={`/games/new/${page}`}
              release={release}
              setRelease={setRelease}
              num={page}
              setPage={setPage}
              pageArray={pageArray}
              nameComps={nameComps}
              setNameComps={setNameComps}
            />
            <ItemsQuery
              exact
              path={`/games/${page}`}
              num={page}
              setPage={setPage}
              pageArray={pageArray}
            />
            <FilterQuery
              path={`/games/${page}/search=${urlName}`}
              filter={urlName}
              num={page}
              setPage={setPage}
              pageArray={pageArray}
              nameComps={nameComps}
            />
            <Route exact path={`/game/:id/:name`} component={TheGame} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
