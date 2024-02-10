import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { client } from "./apolloClient.ts";
import "./index.css";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <App />
      </ApolloProvider>
    </MantineProvider>
  </React.StrictMode>
);
