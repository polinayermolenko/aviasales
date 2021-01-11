import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Alert } from 'antd';
import withTicketService from '../../components/Hoc/withTicketService';
import TicketList from '../../components/TicketList/TicketList';
import { sortTickets, filterTickets, transformTickets } from '../../actions/actions';

const TicketListContainer = (props) => {
  const { tickets, ticketService, loadTickets, stop, activeSorting, activeFilters } = props;
  const TICKETS_PER_PERCENT = 90;
  const [isLoadingFinished, setLoadingStatus] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    loadTickets(ticketService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoadingPercent(tickets.length / TICKETS_PER_PERCENT);
    if (!stop) {
      loadTickets(ticketService);
    }
    if (stop && tickets.length) {
      setLoadingStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  const filteredTickets = filterTickets(tickets, activeFilters);
  const sortedTickets = sortTickets(filteredTickets, activeSorting);

  if (!activeFilters.length) {
    return (
      <Alert message="Info" description="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
    );
  }

  if (isLoadingFinished) {
    return <TicketList tickets={sortedTickets.slice(0, 5)} />;
  }

  return (
    <>
      <Progress
        percent={loadingPercent}
        strokeColor={{ from: '#2196f3', to: '#00FF00' }}
        showInfo={false}
        status="active"
      />
      <TicketList tickets={sortedTickets.slice(0, 5)} />;
    </>
  );
};

const mapStateToProps = ({ ticketsReducer: { tickets, stop, error }, activeSorting, activeFilters }) => ({
  tickets,
  stop,
  error,
  activeSorting,
  activeFilters,
});

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
  activeSorting: PropTypes.string.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default withTicketService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
