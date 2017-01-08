# OLIOS

Angular JS (v.1.5.7 + ES6)

## How to Install

To start working you need:
 
+ Install the dependencies for client side
+ Install [Deployd](http://deployd.com/) for server side
+ Install [MongoDB](https://github.com/deployd/deployd#install-from-npm) for server side

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

Make sure 'mongod' are in your $PATH (for example for Windows it can be 'C:\Program Files\MongoDB\Server\3.4\bin\')

## Workflow

Run the development server:

```
npm run dev
```

After starting the server you can open [http://localhost:8080](http://localhost:8080)

Run Deployd's server:

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