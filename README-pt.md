<p align="center">

  <h3 align="center">eWallet</h3>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Lincense&message=GPL&color=0000ff" alt="License" />
</p>

<p align="center">
    Este é o front-end do website financeiro eWallet desenvolvido para a pós graduação de Engenharia de Software da PUC-Rio.
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

Esta é a UI do website financeiro eWallet desenvolvido para a pós graduação de Engenharia de Software da PUC-Rio.

Link para acessar o back-end do projeto: [eWallet-back](https://github.com/3salles/eWallet-back).

Acesse este projeto na Vercel [ewallet](https://ewallet-79nux12gd-3salles.vercel.app).

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
    <td>Cadastro</td>
    <td>Home</td>
  </tr>
  <tr>
    <td><img width="500" alt="Register Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/47b4fd49-84f3-4770-8aae-36ae581d4344"></td>
    <td><img width="500" alt="Dashboard Screen" src="https://github.com/3salles/eWallet-front/assets/62452619/c31747bb-d402-4cf9-a7f2-7f2fd4b92e90"></td>
  </tr>
  <tr>
    <td>Transação</td>
    <td>Nova Transação</td>
  </tr>
  <tr>
    <td><img width="500" alt="Transaction Screen" src="https://github.com/3salles/guess-kitty/assets/62452619/3e158752-e910-45f4-85d8-b844c66a3819"></td>
    <td><img width="500" alt="New Transaction Screen" src="https://github.com/3salles/guess-kitty/assets/62452619/38eeb29f-8a74-4dee-a9fa-bdb8ccae5265"></td>
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

Este projeto usa [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com), você precisa deles para construir as dependências dele.

### :construction: Prerequisites

Clone o repositório deste projeto:

```bash

$ git clone https://github.com/3salles/eWallet-front.git

# Entre nas pasta`eWallet-front`:

$ cd eWallet-front
```

🚨 Se você não possuir o git em sua máquina, instale [aqui](https://git-scm.com/downloads).

## :lipstick: Front-end

Este projeto pode ser rodado em um container do Docker.

Entre na pasta `eWallet-front` e rode os seguintes comandos:

```bash
$ docker build -t ewallet-front .
$ docker run -d -p 8080:8080 ewallet-front 
```
A aplicação estará disponível em `http://localhost:3000`.

### :construction: Installing Dependencies

Dentro da pasta `eWallet-front`, instale as dependências:

```bash
$ yarn install
```

### :arrow_forward: Running Front-end

Rode o seguinte comando para ver a aplicação:

```bash
$ yarn dev
```

A aplicação estará disponível em  `http://localhost:5173`.

## :page_facing_up: License

Este projeto está sob a licença [GPL](https://github.com/3salles/eWallet-front/blob/main/LICENSE).

## :woman_technologist: Author

[Beatriz Salles](https://github.com/3salles)

<p align="center">Developed with 💜</p>