import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import reducers from './reducers';

import App from './App';
import FormPage from './pages/FormPage.js'
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "form",
        element: <FormPage/>,
      },
  ]);

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
     document.getElementById('root')
);

