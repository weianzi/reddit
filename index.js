import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

var app = document.createElement('div');
app.id = 'root';
document.body.appendChild(app);

render(
  <Root />,
  document.getElementById('root')
)