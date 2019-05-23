var express_graphql = require('express-graphql');
import { buildSchema } from 'graphql';

import fetch from 'node-fetch';

const schema = buildSchema(`
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

const getActor = async (args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`https://swapi.co/api/people/${id}`);
        const json = await response.json();
        console.log(json);

        return json;

    } catch (error) {
        console.log(error);
    }

}

interface RequestPayload {
    results: Actor[]
}

interface Actor {
    url: string,
    name: string,
    height: string,
    birth_year: string,
    gender: string
}


const getActors = async () => {
    try {
        const response = await fetch('https://swapi.co/api/people');
        const json = await response.json() as RequestPayload;

        return json.results.map(actor =>
            ({
                id: actor.url,
                name: actor.name,
                height: actor.height,
                birth_year: actor.birth_year,
                gender: actor.gender
            })
        );

    } catch (error) {
        console.log(error);
    }
}

var root = {
    actor: getActor,
    actors: getActors
};

export const graphqlEndpoint = () => express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
});