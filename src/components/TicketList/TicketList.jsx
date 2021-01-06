import React from 'react';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';
import classes from './TicketList.module.scss';
import { formatData } from '../../actions/actions';

const TicketList = ({ tickets }) => {
  const data = tickets.map(formatData);

  const elements = data.map((item) => {
    const { id } = item;

    return (
      <li key={id} className={classes['ticket-list__item']}>
        <Ticket ticket={item} />
      </li>
    );
  });
  return <ul className={classes['ticket-list']}>{elements}</ul>;
};

export default TicketList;

TicketList.defaultProps = {
  tickets: [],
};

TicketList.propTypes = {
  tickets: PropTypes.instanceOf(Array),
  // tickets: PropTypes.arrayOf(PropTypes.object),
};
