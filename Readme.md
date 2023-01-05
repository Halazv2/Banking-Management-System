# Banking Management System

A web application for managing a bank's customers, accounts, and transactions.

## Tech Stack

- [X] NodeJS
- [X] ExpressJS
- [X] MongoDB
- [X] Swagger (for API documentation)
- [ ] ReactJS (for the frontend)
- [ ] docker (will be added soon to make it easier to run the application locally)

## Features

- [ ] Add, view, edit, and delete customers
- [X] Add, view, edit, and delete accounts
- [ ] Perform transactions (deposits, withdrawals, and transfers)
- [ ] View transaction history for an account
- [ ] View customer and account information

## Getting Started

### Prerequisites

- NodeJS and npm (comes with NodeJS)
- MongoDB

### Installation

1. Clone the repository

```bash
git clone https://github.com/Halazv2/Banking-Management-System
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file in the root directory and add the following environment variables

```bash
NODE_ENV=development
PORT=4000
MONGO_URL=mongodb://localhost:27017/cmd_db
```

4. Start the server

```bash
npm run start
```

5. Open a browser and go to http://localhost:4000

## API Documentation

The API documentation can be found at http://localhost:4000/api-docs

## Author

> [
>     Halazv2](https://github.com/Halazv2 "Halazv2")
