import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setActiveFilter } from '../../actions/actions';
import { FILTER_BUTTONS } from '../../utils/constants';

import classes from './TicketFilter.module.scss';

const checkActiveFilter = (filters, currentFilterId) => filters.some((el) => el === currentFilterId);

const TicketFilter = ({ activeFilters, setFilter }) => {
  const elements = FILTER_BUTTONS.map((item) => {
    const { id, name } = item;
    return (
      <li key={id} className={classes['filter-list__item']}>
        <input
          id={id}
          className={classes.filter__checkbox}
          value={name}
          type="checkbox"
          checked={checkActiveFilter(activeFilters, id)}
          onChange={() => setFilter({ filterId: id })}
        />
        <label className={classes.filter__label} htmlFor={id}>
          {name}
        </label>
      </li>
    );
  });

  return (
    <fieldset className={classes.filter}>
      <h2 className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={classes['filter-list']}>{elements}</ul>
    </fieldset>
  );
};

TicketFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  activeFilters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};

const mapStateToProps = (state) => ({ activeFilters: state.activeFilters });

const mapDispatchToProps = {
  setFilter: setActiveFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilter);
