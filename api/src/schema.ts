

var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
var request = require('request');

var schema = buildSchema(`
    type Query {
        actor(id: String): Actor
        actors: [Actor]
    },
    type Actor {
        id: String
        name: String
        height: String
        birth_year: String
        gender: String
    }
`);

var getActor = (args) => {
    var id = args.id;

    return {
        id: '12',
        name: 'gawri',
        height: '322',
        birth_year: '1984',
        gender: 'male'
    }
}



var getActors = () => {

    /*return [{
        id: '12',
        name: 'gawri12',
        height: '322',
        birth_year: '1984',
        gender: 'male'
    },{
        id: '13',
        name: 'aaaaa',
        height: '322',
        birth_year: '1984',
        gender: 'male'
    }]*/

    
   
   request('https://swapi.co/api/people', function(error, response, body) {

        let array = [];

        if (!error && response.statusCode == 200) {
           // console.log(body) ;
           var swapiResult = JSON.parse(body).results;
           swapiResult.map(actor => { 
                return array.push({
                    id: actor.url,
                    name: actor.name,
                    height: actor.height,
                    birth_year: actor.birth_year,
                    gender: actor.gender
                });
           }); 
        }

        console.log(array);
        return array;
    });

    console.log(test);
}

var root = {
    actor: getActor,
    actors: getActors
};

exports.graphqlEndpoint = () => express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
});