# F-shop eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.

 
<!-- toc -->

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)

* [Bug Fixes, corrections and code FAQ](#bug-fixes-corrections-and-code-faq)
  - [BUG: Warnings on ProfileScreen](#bug-warnings-on-profilescreen)
  - [BUG: Changing an uncontrolled input to be controlled](#bug-changing-an-uncontrolled-input-to-be-controlled)
  - [BUG: All file types are allowed when updating product images](#bug-all-file-types-are-allowed-when-updating-product-images)
  - [BUG: Throwing error from productControllers will not give a custom error response](#bug-throwing-error-from-productcontrollers-will-not-give-a-custom-error-response)
    - [Original code](#original-code)
  - [FAQ: How do I use Vite instead of CRA?](#faq-how-do-i-use-vite-instead-of-cra)
    - [Setting up the proxy](#setting-up-the-proxy)
    - [Setting up linting](#setting-up-linting)
    - [Vite outputs the build to /dist](#vite-outputs-the-build-to-dist)
    - [Vite has a different script to run the dev server](#vite-has-a-different-script-to-run-the-dev-server)
    - [A final note:](#a-final-note)
  * [License](#license)

<!-- tocstop -->

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@email.com (Admin)
123456

gabe@email.com (Customer)
123456

gio@email.com (Customer)
123456

ilia@email.com (Customer)
123456
```
