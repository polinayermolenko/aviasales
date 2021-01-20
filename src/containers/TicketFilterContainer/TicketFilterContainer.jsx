import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TicketFilter from '../../components/TicketFilter/TicketFilter';
import { setActiveFilter } from '../../actions/actions';

const TicketFilterContainer = ({ activeFilters, setFilter }) => (
  <TicketFilter activeFilters={activeFilters} setFilter={setFilter} />
);

const getActiveFilters = ({ activeFilters }) => activeFilters;

const mapStateToProps = (state) => ({ activeFilters: getActiveFilters(state) });

const mapDispatchToProps = {
  setFilter: setActiveFilter,
};

TicketFilterContainer.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilterContainer);
