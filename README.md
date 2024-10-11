# Vending Machine in Nest.js

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.yarnjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/yarn/v/@nestjs/core.svg" alt="yarn Version" /></a>
<a href="https://www.yarnjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/yarn/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.yarnjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/yarn/dm/@nestjs/common.svg" alt="yarn Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a Vending Machine using [Nest's](https://github.com/nestjs/nest) framework TypeScript starter repository. This is one of the many implementations of this project. Other implementations will be developed in the following frameworks:
- Spring Boot using Java
- Spring Boot using Kotlin
- Django

### High Level Features
This vending machine server has the following simulated features:
1. Admin User Login to Check Stocks of Items and Replenish Items
2. Payment Method via Credit Card (simulation only)
3. Payment Method using cash (Korean Won coins: 100, 500; Korean Won Bills: 1000, 5000, 10,000 and 50,000)
4. Ability to give change in cash
5. Credit card payment fallback daemons

### Technical Features
- Redis as the temporary storage cache
- MongoDB as the database
- Docker ready for easy deployment

This project may be a little over-spec but this project reflects a vending machine network that connects to a payment system.

The payment daemon runs independently and reads data via a queueing system using Apache Kaftka.

## Installation

```bash
$ yarn install
```

## Setting the Admin Credentials
Admin credentials are currently being saved as environment variables:
```
# direnv
ADMIN_PASSWORD=YourSecurePasswordHere123!!!
```

## Running the app

```bash
# development
$ yarn run start <mode>

# watch mode
$ yarn run start:dev <mode>

# production mode
$ yarn run start:prod <mode>
```

Modes can be any of the following:
- `server`
- `card-daemon`

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
Vending Machine Server by Paul Vincent Contreras is also an open-source project.

## Stay in touch

- Author - [Paul Vincent Contreras](https://linkedin.com/in/vincecontreras)
- Website - [https://simplyconvinced.com](https://simplyconvinced.com/)

## License

As of October 11, 2024, Vending Machine Server based in Nest.js has no associated licensing model but is currently an open-source project. However, this project should be referenced when used.
