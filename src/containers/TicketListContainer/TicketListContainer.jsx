import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withTicketService from '../../components/Hoc/withTicketService';
import TicketList from '../../components/TicketList/TicketList';
import { transformTickets } from '../../actions/actions';

const TicketListContainer = (props) => {
  const { tickets, ticketService, loadTickets, stop } = props;

  useEffect(() => {
    loadTickets(ticketService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!stop) {
      loadTickets(ticketService);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  if (!tickets.length) {
    return null;
  }

  return <TicketList tickets={tickets.slice(0, 25)} />;
};

const mapStateToProps = ({ ticketsReducer: { tickets, stop, error } }) => ({ tickets, stop, error });

// const mapDispatchToProps = (dispatch) => ({ loadTickets: (service) => dispatch(transformTickets(service)) });

const mapDispatchToProps = {
  loadTickets: transformTickets,
};

TicketListContainer.defaultProps = {
  tickets: [],
};

TicketListContainer.propTypes = {
  tickets: PropTypes.instanceOf(Array),
  //   tickets: PropTypes.arrayOf(PropTypes.object),
  loadTickets: PropTypes.func.isRequired,
  stop: PropTypes.bool.isRequired,
  ticketService: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]))
    .isRequired,
};

export default withTicketService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
