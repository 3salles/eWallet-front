<p align="center">

  <h3 align="center">eWallet</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Lincense&message=GPL&color=0000ff" alt="License" />
</p>

<p align="center">
    This is eWallet (a financial website) front-end. It was developed for a postgraduate course in Software Engineering at PUC-Rio
    <br />
    <a href="README.md">🇺🇸English</a>
    ·
    <a href="README-pt.md">🇧🇷Portuguese</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## 🗂 Table of Contents

* [About the Project](#book-about-the-project)
  * [Technologies](#computer-technologies)
* [Installation](#bricks-installation)
  * [Prerequisites](#construction-prerequisites)
  * [Front-end](#lipstick-front-end)
    * [Installing Dependencies](#construction-installing-dependencies)
    * [Setting Front-end](#wrench-setting-front-end)
    * [Running Front-end](#arrow_forward-running-front-end)
* [License](#page_facing_up-license)
* [Author](#woman_technologist-author)

## :book: About The Project

This is eWallet (a financial website) front-end. It was developed for a postgraduate course in Software Engineering at PUC-Rio

Link to access back-end project: [eWallet-back](https://github.com/3salles/eWallet-back).

<!-- Access this project on Vercel [ewallet](https://ewallet-79nux12gd-3salles.vercel.app). -->

* Screenshots

<table>
  <tr>
    <td>Landing Page</td>
    <td>Login</td>
  </tr>
  <tr>
    <td><img width="500" alt="Landing page" src="https://github.com/3salles/guess-kitty/assets/62452619/1b0ac753-850d-49d4-bea9-1db20152d644"></td>
    <td><img width="500" alt="Login Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/6f7df956-9226-4ef4-a2a5-f48a1d77370a"></td>
  </tr>
  <tr>
    <td>Create account</td>
    <td>Dashboard</td>
  </tr>
  <tr>
    <td><img width="500" alt="Register Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/47b4fd49-84f3-4770-8aae-36ae581d4344"></td>
    <td><img width="500" alt="Dashboard Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/2360c169-b6bd-40bb-b453-989cd337597c"></td>
  </tr>
  <tr>
    <td>Transactions</td>
    <td>New Transaction</td>
  </tr>
  <tr>
    <td><img width="500" alt="Transaction Screen" src="https://github.com/3salles/guess-kitty/assets/62452619/3e158752-e910-45f4-85d8-b844c66a3819"></td>
    <td><img width="500" alt="New Transaction Screen" src="https://github.com/3salles/guess-kitty/assets/62452619/38eeb29f-8a74-4dee-a9fa-bdb8ccae5265"></td>
  </tr>
  <tr>
    <td>Bills</td>
    
  </tr>
  <tr>
    <td><img width="500" alt="Bills Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/61de8488-a19b-4d4c-9350-59359723c8ad"></td>
  </tr>
 </table>

### :computer: Technologies

* [Vite](https://vitejs.dev)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org)
* [Chakra UI](https://chakra-ui.com/)
* [Docker](https://www.docker.com)
* [Freecurrency API](https://freecurrencyapi.com)

## :bricks: Installation

This project use [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com), you will need them to build its dependencies.

### :construction: Prerequisites

Clone this project repository:

```bash

$ git clone https://github.com/3salles/eWallet-front.git

# Enter in `eWallet-front` folder:

$ cd eWallet-front
```

🚨 If you don't have git in your machine, you can install it [here](https://git-scm.com/downloads).

## :lipstick: Front-end

This project can be used with Docker container.

In `eWallet-front` folder, run following commands:

```bash
$ docker build -t ewallet-front .
$ docker run -d -p 8080:8080 ewallet-front 
```
The application will be available on `http://localhost:3000`.

### :construction: Installing Dependencies

In `eWallet-front` folder, install its dependencies:

```bash
$ yarn install
```

### :wrench: Setting Front-end

Before running project, create a .env file in `eWallet-front` folder with following environment keys:

```
VITE_BASE_API_URL_DEV=http://127.0.0.1:5001 //URL for localhost API

VITE_BASE_API_URL=http://127.0.0.1:5001 // URL for deployed API

VITE_FREECURRENCY_KEY // You can add yours key
VITE_CURRENCY_URL=https://api.freecurrencyapi.com/v1 // URL for freecurrency API
```

You can get your own key to freecurrency API [here](https://freecurrencyapi.com). 

🚨 This project project is not deployed yet, and the backend API is not deployed too. So use localhost URL in deployed API key. 

### :arrow_forward: Running Front-end

Run the following command to access the application:

```bash
$ yarn dev
```

The application will be available on `http://localhost:8080`.

🚨 You can create an account or use `username: admin` and `password: 123456`.

🚨 If login has a delay to go to next page, you can reload page or go to page: `http://localhost:8080/home/overview`.

## :page_facing_up: License

This project uses [GPL](https://github.com/3salles/eWallet-front/blob/main/LICENSE) license.

## :woman_technologist: Author

[Beatriz Salles](https://github.com/3salles)

<p align="center">Developed with 💜</p>