import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ticket from '../Ticket/Ticket';
import classes from './TicketList.module.scss';
import withTicketService from '../Hoc/withTicketService';
import { transformTickets } from '../../actions/actions';

class TicketList extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { ticketService, loadTickets } = this.props;
    loadTickets(ticketService);
  }

  render() {
    const { tickets } = this.props;
    const elements = tickets.map((item) => {
      const { id } = item;
      return (
        <li key={id} className={classes['ticket-list__item']}>
          <Ticket ticket={item} />
        </li>
      );
    });
    return <ul className={classes['ticket-list']}>{elements}</ul>;
  }
}

const mapStateToProps = ({ ticketsReducer: { tickets } }) => ({ tickets });

/* const mapDispatchToProps = {
  loadTickets: transformTickets
}  */

const mapDispatchToProps = (dispatch) => ({ loadTickets: (service) => dispatch(transformTickets(service)) });

export default withTicketService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));

TicketList.defaultProps = {
  tickets: [],
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
};
