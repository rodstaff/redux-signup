import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import Greetings from './components/greetings'
import SignupPage from './components/signup/signup-page'

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
	    <Route path="/" component={App}>
	      <IndexRoute component={Greetings} />
	      <Route path="signup" component={SignupPage} />
	    </Route>
    </Router>
  </Provider>, 
  document.getElementById('root')
);