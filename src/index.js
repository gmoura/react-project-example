import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from 'laboratoria-ui';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { language, messages } from './config/intl';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages}>
      <MuiThemeProvider theme={Theme}>
        <Router>
          <div>
            <Route path="/" component={App} />
          </div>
        </Router>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
