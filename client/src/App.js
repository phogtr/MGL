import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Navbar } from "./components";
import "./App.css";
import Pagination from "./components/Pagination";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  const [page, setPage] = useState(1);
  const [pageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Home num={page} setPage={setPage} pageArray={pageArray} />
            <Route exact path={`/${page}`} component={Home} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
