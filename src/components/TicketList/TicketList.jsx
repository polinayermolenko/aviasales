import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import classes from './TicketList.module.scss';

const TicketList = ({ tickets }) => {
  const elements = tickets.map((item) => {
    const { id } = item;
    return (
      <li key={id} className={classes['ticket-list__item']}>
        <Ticket ticket={item} />
      </li>
    );
  });
  return <ul className={classes['ticket-list']}>{elements}</ul>;
};

const mapStateToProps = ({ tickets }) => ({ tickets });

export default connect(mapStateToProps)(TicketList);

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
