import { useEffect, useState } from 'react';
import { TICKETS_PER_PERCENT } from '../../utils/constants';

const useTickets = (loadTickets, ticketService, tickets, stop) => {
  const [isLoadingFinished, setLoadingStatus] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    loadTickets(ticketService);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoadingPercent(tickets.length / TICKETS_PER_PERCENT);
    if (!stop) {
      loadTickets(ticketService);
    }
    if (stop && tickets.length) {
      setLoadingStatus(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickets]);

  return { isLoadingFinished, loadingPercent };
};

export default useTickets;
