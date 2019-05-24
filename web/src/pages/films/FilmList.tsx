import React from 'react';
import { Query } from "react-apollo";
import { QUERY_FILMS } from '../../classes/query';
import HeaderContainer from '../../shared/header-container/HeaderContainer';
import styles from './FilmList.module.scss';

const loadFilms = (films: IFilm[]) => {
    return films.map((film: IFilm) => {
        return <div key={film.created} className={styles.film}>{film.title}</div>;
    })
}

export default class FilmList extends React.Component {
    render() {
        return <>
            <HeaderContainer title="Films"></HeaderContainer>
            <Query query={QUERY_FILMS}>
            
                {({ data }: { data: any }) => <div className={styles.filmsContainer}>
                {console.log(data)}
                    {data.films ? loadFilms(data.films) : 'Loading...'}
                </div>}
            </Query>
        </>;
    }
}