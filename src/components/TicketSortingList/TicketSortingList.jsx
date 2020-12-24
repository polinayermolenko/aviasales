import React from 'react';
import { SORT_BUTTONS } from '../../utils/constants';
import SortingButton from '../SortingButton/SortingButton';
import classes from './TicketSortingList.module.scss';

const TicketSortingList = () => {
  const sortingButtons = SORT_BUTTONS.map((item) => {
    const { id, name } = item;
    return (
      <li key={id}>
        <SortingButton name={name} id={id} />
      </li>
    );
  });

  return <ul className={classes['sorting-list']}>{sortingButtons}</ul>;
};

export default TicketSortingList;
