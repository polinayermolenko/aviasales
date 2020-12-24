import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { setActiveSorting } from '../../actions/actions';
import { Sorting } from '../../utils/constants';
import classes from './SortingButton.module.scss';

const SortingButton = (props) => {
  const { name, id, activeSorting, setActiveButton } = props;
  const buttonClasses = classNames(
    classes['sorting-button'],
    id === Sorting.CHEEP ? classes['sorting-button--cheep'] : classes['sorting-button--fast'],
    { [classes['sorting-button--active']]: id === activeSorting }
  );

  return (
    <button type="button" className={buttonClasses} onClick={() => setActiveButton(id)}>
      {name}
    </button>
  );
};

const mapStateToProps = ({ activeSorting }) => ({ activeSorting });

const mapDispatchToProps = (dispatch) => ({
  setActiveButton: (activeSorting) => dispatch(setActiveSorting(activeSorting)),
});

SortingButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  activeSorting: PropTypes.string.isRequired,
  setActiveButton: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingButton);
