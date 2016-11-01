import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Greetings from './components/greetings';
import SignupPage from './components/signup/signup-page';

render(
  <Router history={browserHistory} >
	<Route path="/" component={App}>
	  <IndexRoute component={Greetings} />
	  <Route path="signup" component={SignupPage} />
	</Route>
  </Router>, 
  document.getElementById('root')
);