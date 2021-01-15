import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketFilter from '../../components/TicketFilter/TicketFilter';
import { setActiveFilter } from '../../actions/actions';

const TicketFilterContainer = ({ activeFilters, setFilter }) => (
  <TicketFilter activeFilters={activeFilters} setFilter={setFilter} />
);

TicketFilterContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const mapStateToProps = ({ activeFilters }) => ({ activeFilters });

const mapDispatchToProps = {
  setFilter: setActiveFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilterContainer);
