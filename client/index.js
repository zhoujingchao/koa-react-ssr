import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';

import Home from './home';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
