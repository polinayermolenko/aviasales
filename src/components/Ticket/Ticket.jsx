import React from 'react';
import PropTypes from 'prop-types';
import classes from './Ticket.module.scss';

const Ticket = ({ ticket: { price, carrier, to, from } }) => {
  const { toOrigin, toDestination } = to;
  const { fromOrigin, fromDestination } = from;
  return (
    <article className={classes.ticket}>
      <header className={classes.ticket__header}>
        <p className={classes.ticket__price}>{price}</p>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании" width="" />
      </header>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>
            {toOrigin} - {toDestination}
          </h3>
          <p className={classes.ticket__info}>10:45-08:00</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>21ч 15м </p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>2 ПЕРЕСАДКИ</h3>
          <p className={classes.ticket__info}>HKG,JNB</p>
        </div>
      </section>
      <section className={classes.ticket__way}>
        <div>
          <h3 className={classes.ticket__subtitle}>
            {fromOrigin} - {fromDestination}
          </h3>
          <p className={classes.ticket__info}>10:45-08:00</p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>В ПУТИ </h3>
          <p className={classes.ticket__info}>21ч 15м </p>
        </div>
        <div>
          <h3 className={classes.ticket__subtitle}>2 ПЕРЕСАДКИ</h3>
          <p className={classes.ticket__info}>HKG,JNB</p>
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
      toOrigin: PropTypes.string,
      toDestination: PropTypes.string,
    }),
    from: PropTypes.shape({
      fromOrigin: PropTypes.string,
      fromDestination: PropTypes.string,
    }),
  }).isRequired,
};

export default Ticket;
