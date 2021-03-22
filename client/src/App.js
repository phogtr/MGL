import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FilterQuery, FilterForm, ItemsQuery, Navbar, TheGame, ReleasedQuery } from "./components";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [urlName, setUrlName] = useState("");
  const [pageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="container">
          <FilterForm
            setUrlName={setUrlName}
            pageArray={pageArray}
            setPage={setPage}
            filter={filter}
            setFilter={setFilter}
          />
          <Switch>
            <ReleasedQuery exact path={"/"} />
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
            />
            <Route exact path={`/game/:id/:name`} component={TheGame} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
