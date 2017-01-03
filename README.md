# OLIOS

Angular JS

## How to Install

To start working you just needs to install the dependencies.

Please, check the package.json NPM and NodeJs versions supported.

#### Client side

```
npm install
```

#### Server side

+ [http://deployd.com/](http://deployd.com/)
+ [https://github.com/deployd/deployd#install-from-npm](https://github.com/deployd/deployd#install-from-npm)

```
npm install deployd -g
install mongodb
```

## Workflow

Run the development server:

```
npm run dev
```

After starting the server you can open [http://localhost:8080](http://localhost:8080)

Run deployd server:

```
cd deployd
dpd
```

After starting the server you can open [http://localhost:2403/dashboard/](http://localhost:2403/dashboard/)

## Deploy

To deploy the assets for production you have to run:

```
npm run deploy
```

This script will create "assets/" folder where the assets are going to be deployed.