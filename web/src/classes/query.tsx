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
        }
    }
`;

export const QUERY_ACTOR = gql`
    query Actor($id: String!) {
        actor(id: $id) {
            films {
                id
                title
            }
        }
    }
`;

