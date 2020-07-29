import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Home, Navbar } from "./components";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const App = () => {
  const [page, setPage] = useState(1);
  const [pageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="container">
        <Home num={page} setPage={setPage} pageArray={pageArray} />
      </div>
    </ApolloProvider>
  );
};

export default App;
