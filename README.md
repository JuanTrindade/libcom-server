# Libcom RESTful API

## About

Libcom is a simple app built for academic purposes. The name comes from (Lib)rary and (Com)munity.

## Built with

- Node.js + Express
- Knex
- Postgres

## Building

First, clone or download the repository. After that, install the projects dependencies.

```
$ git clone git@github.com:JuanTrindade/libcom-server.git
$ cd libcom-server
$ cp .env.example .env
$ npm install
```

## Running

You'll need a Postgres instance running on your machine. If you have already, this step is optional.

```
$ docker compose up -d
```

After that, you'll need to run the Knex migrations:

```
$ npx knex migrate:latest
```

To start a local instance of the app, execute:

```
$ npm run dev
```

An instance of the app will be available at localhost:8080

## Testing

To execute the tests, run:

```
$ npm test
```

## Contributors

- Hugo Kishi - [**hugokishi**](https://github.com/hugokishi)
- Juan Trindade - [**JuanTrindade**](https://github.com/JuanTrindade)
- Nícolas Carvalho - [**noccss**](https://github.com/noccss)
- Pedro Ramos - [**ramos-ph**](https://github.com/ramos-ph)

## License

This project is licensed under the MIT license.
