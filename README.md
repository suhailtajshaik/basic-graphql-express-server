# Basic-Node-Express-Server
Basic node express server for getting started.

## Isolated Clone
```
npx degit https://github.com/suhailtajshaik/basic-graphql-express-server.git PROJECT_NAME
```
## Running 
> One time installation:
```
npm install
```
> ### development mode :
```
npm start
```
> Production mode 
```
node index.js
```

## Querying GraphQL API
> Navigate to http://localhost:3000/graphql,
> copy & paste below snippet and click on run button on the top.

1. 
```
query{
  events
} 
```

2. 
```
mutation{
  createEvent(name:"Hello World")
} 
```