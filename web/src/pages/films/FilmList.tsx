import React from 'react';
import { Query } from "react-apollo";
import { QUERY_FILMS, QUERY_ACTOR } from '../../classes/query';
import HeaderContainer from '../../shared/header-container/HeaderContainer';
import styles from './FilmList.module.scss';
import { match } from '../../../node_modules/@types/react-router';
const queryString = require('query-string');

const loadFilms = (films: IFilm[]) => {
    return films.map((film: IFilm) => {
        return <div key={film.id} className={styles.film}>{film.title}</div>;
    })
}

interface Props {
    match: match,
    location: any
}

export default class FilmList extends React.Component<Props> {

    actorId: any;

    loadFilms = (data: any) => {
        return <>{data.films ? loadFilms(data.films) : 'Loading...'}</>;
    }

    loadFilmsForActor = (data: any) => {
        if (data.actor) {
            return <>{data.actor.films ? loadFilms(data.actor.films) : 'Loading...'}</>;
        }
    }

    render() {

        let query = QUERY_FILMS;
        let variables = {};

        const params = queryString.parse(this.props.location.search); 
        if (params.actorId) {
            this.actorId = params.actorId;
            query = QUERY_ACTOR;
            variables = { id: this.actorId };
        }else{
            this.actorId = null;
        }

        return <>
            <HeaderContainer title="Films"></HeaderContainer>
            <Query query={query} variables={variables}>
                {({ data }: { data: any }) => <div className={styles.filmsContainer}>
                    {this.actorId  ? this.loadFilmsForActor(data) : this.loadFilms(data)}
                </div>}
            </Query>
        </>;
    }
}