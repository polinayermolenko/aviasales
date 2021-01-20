import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Alert } from 'antd';
import withTicketService from '../../components/Hoc/withTicketService';
import TicketList from '../../components/TicketList/TicketList';
import { transformTickets } from '../../actions/actions';
import useLoadTicketsEffect from './useLoadTicketsEffect';
import { getError, getStop, getTickets, getDisplayedTickets, getFilters } from './selectors';

const TicketListContainer = (props) => {
  const { tickets, ticketService, loadTickets, stop, activeFilters, displayedTickets } = props;
  const { isLoadingFinished, loadingPercent } = useLoadTicketsEffect(loadTickets, ticketService, tickets, stop);

  if (!activeFilters.length) {
    return (
      <Alert message="Info" description="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
    );
  }

  if (isLoadingFinished) {
    return <TicketList tickets={displayedTickets.slice(0, 5)} />;
  }

  return (
    <>
      <Progress
        percent={loadingPercent}
        strokeColor={{ from: '#2196f3', to: '#00FF00' }}
        showInfo={false}
        status="active"
      />
      <TicketList tickets={displayedTickets.slice(0, 5)} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tickets: getTickets(state),
  stop: getStop(state),
  error: getError(state),
  activeFilters: getFilters(state),
  displayedTickets: getDisplayedTickets(state),
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
  loadTickets: PropTypes.func.isRequired,
  stop: PropTypes.bool.isRequired,
  ticketService: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]))
    .isRequired,
  activeFilters: PropTypes.instanceOf(Array).isRequired,
  displayedTickets: PropTypes.instanceOf(Array).isRequired,
};

export default withTicketService()(connect(mapStateToProps, mapDispatchToProps)(TicketListContainer));
