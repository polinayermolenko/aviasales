export default class TicketService {
  id = null;

  async getResponse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();

    return body;
  }

  async getSearchId() {
    if (!this.id) {
      const { searchId } = await this.getResponse(`https://front-test.beta.aviasales.ru/search`);
      this.id = searchId;
    }
    return this.id;
  }

  async getTickets() {
    const res = await this.getResponse(`https://front-test.beta.aviasales.ru/tickets?searchId=${this.id}`);
    return res;
  }
}

// const tic = new TicketService();
// tic.getSearchId().then(() => tic.getTickets().then(body => console.log(body.tickets.slice(0, 25))));
