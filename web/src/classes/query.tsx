//import gql from 'graphql-tag';
import { gql } from "apollo-boost";

export const QUERY_FILMS = gql`
    query Films {
        
            title
            producer
            director
            opening_crawl
            created
            url
        
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


