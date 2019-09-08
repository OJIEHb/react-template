import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from '@containers/Home';
import Items from '@containers/Items';
import { Provider } from 'react-redux';
import reducer from '@reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';
import { routes } from '@sources/routes';

axios.defaults.baseURL = process.env.API_URL;
const store = createStore(reducer, applyMiddleware(thunk, promise));

ReactDOM.render((
  <Provider store={ store }>
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ routes.HOME }>Home</Link>
        </li>
        <li>
          <Link to={ routes.ITEMS }>Items</Link>
        </li>
      </ul>
      <Switch>
        <Route path={ routes.HOME } exact component={ Home }/>
        <Route path={ routes.ITEMS } component={ Items }/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
