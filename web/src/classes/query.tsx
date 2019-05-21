import gql from 'graphql-tag';

export const QUERY_FILMS = gql`
    query Films {
        films @rest(type: "FilmsPayload", path: "films") {
            results @type(name: "Film") {
                title
                producer
                director
                opening_crawl
                created
                url
            }
        }
    }
`;

export const QUERY_ACTORS = gql`
    query Actors {
        actors @rest(type: "FilmsPayload", path: "people") {
            results @type(name: "Actor") {
                name
                url
            }
        }
    }
`;

