import React from 'react';
import { FILTER_BUTTONS } from '../../utils/constants';

import classes from './TicketFilter.module.scss';

// eslint-disable-next-line react/prop-types
const TicketFilter = ({ setFilter }) => {
  const elements = FILTER_BUTTONS.map((item) => {
    const { id, name } = item;
    return (
      <li key={id} className={classes['filter-list__item']}>
        <input
          id={id}
          className={classes.filter__checkbox}
          value={name}
          type="checkbox"
          onChange={() => setFilter(id)}
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

export default TicketFilter;
