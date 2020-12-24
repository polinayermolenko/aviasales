import React from 'react';
import { TicketServiceConsumer } from '../TicketServiceContext/TicketServiceContext';

const withTicketService = () => (Component) => (props) => (
  <TicketServiceConsumer>
    {(ticketService) => <Component {...props} ticketService={ticketService} />}
  </TicketServiceConsumer>
);

export default withTicketService;
