import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ticket.module.scss';

const Ticket = ({ ticket: { price, carrier, to, from } }) => {
  const { toRoute, toTime, toDuration, toStops, toStopsCount } = to;
  const { fromRoute, fromTime, fromDuration, fromStops, fromStopsCount } = from;
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>{price} P</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании" width="" />
      </header>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>{toRoute}</h3>
          <p className={classes.ticket__info}>{toTime}</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>{toDuration}</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>{toStopsCount}</h3>
          <p className={classes.ticket__info}>{toStops}</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>{fromRoute}</h3>
          <p className={classes.ticket__info}>{fromTime}</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>{fromDuration}</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>{fromStopsCount}</h3>
          <p className={classes.ticket__info}>{fromStops}</p>
        </div>
      </section>
    </article>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.string,
    carrier: PropTypes.string,
    to: PropTypes.shape({
      toRoute: PropTypes.string,
      toTime: PropTypes.string,
      toDuration: PropTypes.string,
      toStops: PropTypes.string,
      toStopsCount: PropTypes.string,
    }),
    from: PropTypes.shape({
      fromRoute: PropTypes.string,
      fromTime: PropTypes.string,
      fromDuration: PropTypes.string,
      fromStops: PropTypes.string,
      fromStopsCount: PropTypes.string,
    }),
  }).isRequired,
};

export default Ticket;
