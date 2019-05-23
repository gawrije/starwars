var express = require('express');
var graphqlSchema = require('./src/schema.ts');
var app = express();

app.use('/graphql', graphqlSchema.graphqlEndpoint());

app.use('/', function(req, res){
    res.send("Welcome to star war API");
});

app.listen(9000, () => console.log("GraphQL server running on localhost:9000/grapql") );