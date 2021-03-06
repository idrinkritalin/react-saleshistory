# Sales History

## Frameworks and some fancy packages used in this project:

### Server
* nodejs - https://nodejs.org
* express - https://expressjs.com

### Client
* react - https://reactjs.org
* propTypes - https://www.npmjs.com/package/prop-types
* axios - https://github.com/axios/axios
* react-loading - https://www.npmjs.com/package/react-loading
* react-icons - http://react-icons.github.io/react-icons

### Get it running
```bash
npm start # Run server
cd client # navigate into the client folder
npm start # Run client
npm test # Run tests (in case you want)
```

### Demo version
[Sales History - hosted on Heroku](https://crae-saleshistory.herokuapp.com "Sales History")

## Summary of the project
### ✅ Phase 1: Basic list of sales

Your task is to generate a dataset containing 6 months worth of sales, and then display that in a simple list view. You must generate the data programmatically, and may not use a third-party generator. You can use the Express server provided to create an endpoint, which will provide a subset of this data to the client (perhaps initially limited to 100 sales items or so). The sales should be listed with newest sales first, and the UI could look like this.

![Phase 1](docs/phase_1.png)

### ✅ (feature needs to be moved to server side) Phase 2: Filtering sales by payment method & status

In this phase, you should add filtering to your API, and allow the client to update these filters. It should be possible to filter the transactions by payment type (card or cash) and payment status (successful, failed, refunded), or any combination of these filters.

![Phase 2](docs/phase_2.png)

### Phase 3: Aggregate data in groups by day, add daily totals, "Load More" functionality

Finally, you'll put the finishing touches on your Sales History. First, each day should have its own section in the UI, visually-speaking. Above each day, you should list the date and the total from the successful transactions that happened that day. Lastly, you should add a "Load More" button which will allow merchants to see older transactions.

![Phase 3](docs/phase_3.png)