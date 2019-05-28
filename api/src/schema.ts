var express_graphql = require('express-graphql');
import { makeExecutableSchema } from 'graphql-tools';
import {IActorsPayload, IActor, IFilmsPayload,IFilm} from './interface';

import fetch from 'node-fetch';

var typeDefs = [`
    type Query {
        actor(id: String): Actor
        films: [Film]
        actors: [Actor]
    },
    type Actor {
        id: String
        name: String
        height: String
        birth_year: String
        gender: String
        films: [Film]
    },
    type Film {
        id: String
        title: String
        producer: String
        director: String
        opening_crawl: String
        created: String
    }`
];


const getActor = async (_: any, args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`${id}`);
        const actor = await response.json() as IActor;

        return {
            id: actor.url,
            name: actor.name,
            height: actor.height,
            birth_year: actor.birth_year,
            gender: actor.gender,
            films: actor.films
        }

    } catch (error) {
        console.log(error);
    }
}

const getActors = async () => {
    try {
        const response = await fetch('https://swapi.co/api/people');
        const json = await response.json() as IActorsPayload;

       // console.log(json);
        return json.results.map(actor =>
            ({
                id: actor.url,
                name: actor.name,
                height: actor.height,
                birth_year: actor.birth_year,
                gender: actor.gender,
                films: actor.films
            })
        );

    } catch (error) {
        console.log(error);
    }
}

const getFilms = async () => {
    try {
        const response = await fetch('https://swapi.co/api/films');
        const json = await response.json() as IFilmsPayload;

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


const getFilm = async (url: any) => {

    try {
        const response = await fetch(url);
        const film = await response.json() as IFilm;

        return {
            id: film.url,
            title: film.title,
            producer: film.producer,
            director: film.director,
            opening_crawl: film.opening_crawl,
            created: film.created
        }

    } catch (error) {
        console.log(error);
    }
}

const getFilmsForActor = async (actor: IActor, args: any) => {
    return  actor.films.map( film => // TODO: call batch api request
        getFilm(film)
    );
}

const resolvers = {
    Query: {
        actor: getActor,
        actors: getActors,
        films: getFilms
    },
    Actor: {
        films: getFilmsForActor
    }
}

var schema = makeExecutableSchema({typeDefs, resolvers});

export const graphqlEndpoint = () => express_graphql({
    schema: schema,
    graphiql: true,
});


