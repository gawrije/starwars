var  express  = require('express');

import  { graphqlEndpoint }  from './src/schema';

var app = express();

var cors = require('cors')
app.use(cors())

app.use('/graphql', graphqlEndpoint());

app.use('/', function(req: any, res: any){
    res.send("Welcome to star war API");
});

// this is only for aws lambda
module.exports = app; 

// this is for local hosting
//app.listen(9000, () => console.log("GraphQL server running on localhost:9000/grapql") );