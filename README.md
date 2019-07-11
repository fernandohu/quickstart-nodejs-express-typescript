# NodeJS Quickstart

Project quickstart with NodeJS, Typescript, Express and Docker. 

By leveraging the power of Docker you don't need to install Node JS in your computer. You just run everything from a Docker container.  

## Requirements

- Git;
- Docker;
- Docker Compose.

## What is in this quickstart

- NodeJS - Javascript runtime built with Chrome's V8 engine;
- Typescript - Language for application scale Javascript;
- Winston - A logger for just about everything;
- Express - Minimal and flexible NodeJS Webserver;
- Webpack - Module bundler.

## Installation

1) Clone the repository:

```
git clone git@github.com:fernandohu/quickstart-nodejs-express-typescript.git
```

2) Use Docker to run `npm install` on the NodeJS source code at `app/` folder:

```
docker-compose run --rm node npm install
```

3) Run `docker compose` to start up the development environment:

```
docker-compose up
```

After running `docker-compose up` the application should be accessible at http://localhost:3000.

Try the following API Requests (GET):

- http://localhost:3000/messages/
- http://localhost:3000/messages/1
- http://localhost:3000/messages/2
- http://localhost:3000/users
- http://localhost:3000/users/1
- http://localhost:3000/users/2
- http://localhost:3000/healtcheck

## Developing

The source code resides at `/app`. 

## Executing npm 

You can execute `npm` commands by calling the `node` service:

```
docker-compose run -rm node npm XXX
```

The commands will be always executed in the `app` folder.

## Connect to the container

```
docker exec -it nodejs bash
```
