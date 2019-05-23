var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var app = express();


var schema = buildSchema(`
    type Query {
        message: String
    }
`);

var root = {
    message: () => {
        return 'hello world123';
    }
};

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));


app.listen(9000, () => console.log("GraphQL server running on localhost:9000/grapql") );