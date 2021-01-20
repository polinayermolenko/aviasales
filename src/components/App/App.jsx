import React from 'react';
import classes from './App.module.scss';
import logo from '../../img/logo.svg';
import withTicketService from '../Hoc/withTicketService';
import TicketSortingList from '../TicketSortingList/TicketSortingList';
import TicketListContainer from '../../containers/TicketListContainer/TicketListContainer';
import TicketFilterContainer from '../../containers/TicketFilterContainer/TicketFilterContainer';
import 'antd/dist/antd.css';

const App = () => (
  <div className={classes.app}>
    <header className={classes['app-header']}>
      <img className={classes.logo} src={logo} alt="Изображение самолета" />
    </header>
    <main className={classes['app-main']}>
      <section className={classes.filters}>
        <TicketFilterContainer />
      </section>
      <section className={classes.tickets}>
        <TicketSortingList />
        <TicketListContainer />
      </section>
    </main>
  </div>
);

export default withTicketService()(App);
