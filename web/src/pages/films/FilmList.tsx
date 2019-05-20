import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const QUERY = gql`
    query Films {
        films @rest(type: "FilmsPayload", path: "films") {
            results @type(name: "Film") {
                title
            }
        }
    }
`;

export default class FilmList extends React.Component {
    render() {
        return <Query query={QUERY}>
            {({data}: {data: any}) => <div>
                {console.log(data)}
                test
            </div>}
        </Query>;
    }
}