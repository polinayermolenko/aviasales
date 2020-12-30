export default class TicketService {
  async getResponse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();

    return body;
  }

  async getSearchId() {
    const { searchId } = await this.getResponse(`https://front-test.beta.aviasales.ru/search`);
    return searchId;
  }

  async getTickets(searchId) {
    const res = await this.getResponse(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
    return res;
  }
}

// const tic = new TicketService();
// tic.getSearchId().then(res => tic.getTickets(res).then(body => console.log(body.tickets.slice(0, 25))));
