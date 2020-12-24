import React from 'react';
import classes from './App.module.scss';
import logo from '../../img/logo.svg';
import TicketFilter from '../TicketFilter/TicketFilter';
import TicketList from '../TicketList/TicketList';
import withTicketService from '../Hoc/withTicketService';
import TicketSortingList from '../TicketSortingList/TicketSortingList';

const App = () => (
  <div className={classes.app}>
    <header className={classes['app-header']}>
      <img className={classes.logo} src={logo} alt="Изображение самолета" />
    </header>
    <main className={classes['app-main']}>
      <section className={classes.filters}>
        <TicketFilter />
      </section>
      <section className={classes.tickets}>
        <TicketSortingList />
        <TicketList />
      </section>
    </main>
  </div>
);

export default withTicketService()(App);
