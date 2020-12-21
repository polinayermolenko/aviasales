import React from 'react';
import Ticket from '../Ticket/Ticket';
import classes from './TicketList.module.scss';

const TicketList = () => (
  <ul className={classes['ticket-list']}>
    <li className={classes['ticket-list__item']}>
      <Ticket />
    </li>
    <li className={classes['ticket-list__item']}>
      <Ticket />
    </li>
    <li className={classes['ticket-list__item']}>
      <Ticket />
    </li>
    <li className={classes['ticket-list__item']}>
      <Ticket />
    </li>
    <li className={classes['ticket-list__item']}>
      <Ticket />
    </li>
  </ul>
);

export default TicketList;
