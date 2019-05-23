var  express  = require('express');
import  { graphqlEndpoint }  from './src/schema';
var app = express();

var cors = require('cors')
app.use(cors())

app.use('/graphql', graphqlEndpoint());

app.use('/', function(req, res){
    res.send("Welcome to star war API");
});

app.listen(9000, () => console.log("GraphQL server running on localhost:9000/grapql") );