import { gql } from 'apollo-boost';

export const QUERY_FILMS = gql`
    query Films {
        films {
            title
            producer
            director
            opening_crawl
            created
            id
        }        
    }
`;


export const QUERY_ACTORS = gql`
    query Actors {
        actors {
            name
            id
            films {
                id
            }
        }
    }
`;

export const QUERY_FILM = gql`
    query Film {
        film {
            title
            producer
            director
            opening_crawl
            created
            id
        }        
    }
`;


