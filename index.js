const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();

// Middleware
app.use(bodyParser.json());

// Default Route
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
    type RoorQuery{
        events: [String!]
    }
    
    type RootMutation{
        createEvent(name: String): String
    }

    schema{
        query:RoorQuery
        mutation:RootMutation
    }
    `),
    rootValue: {
        events: () => {
            return ['Graph QL', 'Node Js', 'Express Js'];
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    },
    graphiql: true,
}));

// Start server
const server = app.listen(config.port, () => {
    var port = server.address().port;
    console.log('\nExpress server listening on port ' + port + ', in ' + config.env + ' mode');
    console.log("open http://localhost:" + port + "/graphql");
});

// Server on error
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('ADDRESS IN USE');
        console.log('\nExpress server listening on port ' + e.port + ', in ' + config.env + ' mode')
    } else {
        process.exit(1);
    }
});