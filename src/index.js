import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App/App';
import TicketService from './services/TicketService';
import { TicketServiceProvider } from './components/TicketServiceContext/TicketServiceContext';

import './index.scss';

const ticketService = new TicketService();

ReactDOM.render(
  <Provider store={store}>
    <TicketServiceProvider value={ticketService}>
      <App />
    </TicketServiceProvider>
  </Provider>,
  document.getElementById('root')
);
