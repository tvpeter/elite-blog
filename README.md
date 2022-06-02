# Elite Blog

Elite blog is an open blogging platform where writers and readers register with their lightning address. Writers creates and monitize their content by fixing a small amount paid by readers to permanently access the content (using their registered lightning address).

Elite Blog is developed using Nodejs (backend) and Reactjs (frontend). It was developed as an entry for the [Bolt Fun](https://twitter.com/BOLTFUN_btc) hackathon.

### Dependencies

- lnurl-pay
- webln

### Installation

- Clone this repository
- rename the `.env.example`  to `.env` and set the configuration variables
- In the `/backend/config/database.config.js`, replace the `url` with your connection query
- navigate to the `backend` and install the dependencies `cd ./backend && npm install`
- start the server `npm run start`
- navigate to the `frontend` and install the dependencies `cd .. && cd ./frontend && npm install`
- start the server `npm run start`
- go to `http://localhost:3000` to view the app



