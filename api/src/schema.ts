var express_graphql = require('express-graphql');
import { buildSchema } from 'graphql';
import {IActorsPayload, IActor, IFilmsPayload,IFilm} from './interface';

import fetch from 'node-fetch';

const schema = buildSchema(`
    type Query {
        actor(id: String): Actor
        actors: [Actor]
        film(id: String): Film
        films: [Film]
        filmsByActorId(id: String): [Film]
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
    }
`);

const getActor = async (args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`https://swapi.co/api/people/${id}`);
        const actor = await response.json() as IActor;

        console.log(id);

        return {
            id: actor.url,
            name: actor.name,
            height: actor.height,
            birth_year: actor.birth_year,
            gender: actor.gender,
            films: getFilmsByActorId(actor.films)
        }

    } catch (error) {
        console.log(error);
    }

}

const getFilm = async (args: any) => {
    var id = args.id;

    try {
        const response = await fetch(`https://swapi.co/api/films/${id}`);
        const json = await response.json() as IFilm;

        return json;

    } catch (error) {
        console.log(error);
    }

}


/*const getFilmByUrl = async (data: any) => {
    var id = data.id;
    console.log(id);

    try {
        const response = await fetch(`${id}`);
        console.log(response);
        const json = await response.json() as IFilm;

        
        return json;

    } catch (error) {
        console.log(error);
    }

}*/

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
                films: getFilmsByActorId(actor.films)
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


const getFilmsByActorId = (films: any[]) => {

    if (films) {
      return films.map(s => ({id: s}));
    }
    return null;
}

/*const getFilmsByActorId1 = async (args: any) => {

    const actor = await getActor(args);

    return actor.films.map( film => {
        getFilmByUrl(film)
    });
   
}*/

var root = {
    actor: getActor,
    actors: getActors,
    film: getFilm,
    films: getFilms,
    //filmsByActorId: getFilmsByActorId1
};

export const graphqlEndpoint = () => express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
});