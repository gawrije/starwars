var express_graphql = require('express-graphql');
import { buildSchema } from 'graphql';

import fetch from 'node-fetch';

const schema = buildSchema(`
    type Query {
        actor(id: String): Actor
        actors: [Actor]
        film(id: String): Film
        films: [Film]
    },
    type Actor {
        id: String
        name: String
        height: String
        birth_year: String
        gender: String
    },
    type Film {
        id: String
        title: String
        producer: String
        director: String
        opening_crawl: String
        created: String
    }
`);

const getActor = async (args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`https://swapi.co/api/people/${id}`);
        const json = await response.json();

        return json;

    } catch (error) {
        console.log(error);
    }

}

const getFilm = async (args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`https://swapi.co/api/films/${id}`);
        const json = await response.json() as Film;

        return json;

    } catch (error) {
        console.log(error);
    }

}

const getActors = async () => {
    try {
        const response = await fetch('https://swapi.co/api/people');
        const json = await response.json() as ActorsRequestPayload;

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

const getFilms = async () => {
    try {
        const response = await fetch('https://swapi.co/api/films');
        const json = await response.json() as FilmsRequestPayload;

        return json.results.map(film =>
            ({
                id: film.url,
                title: film.title,
                producer: film.producer,
                director: film.director,
                opening_crawl: film.opening_crawl,
                created: film.created
            })
        );

    } catch (error) {
        console.log(error);
    }
}

var root = {
    actor: getActor,
    actors: getActors,
    film: getFilm,
    films: getFilms
};

export const graphqlEndpoint = () => express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
});