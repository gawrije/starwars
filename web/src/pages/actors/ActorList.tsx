import React from 'react';
import { Query } from "react-apollo";
import { QUERY_ACTORS } from '../../classes/query';
import HeaderContainer from '../../shared/header-container/HeaderContainer';
import styles from './ActorList.module.scss';

const loadActors = (actors: IActorsPayload) => {
    return actors.results.map((actor: IActor) => {
        return <div key={actor.url} className={styles.actor}>{actor.name}</div>;
    })
}

export default class ActorList extends React.Component {
    render() {
        return <>
            <HeaderContainer title="People"></HeaderContainer>
            <Query query={QUERY_ACTORS}>
                { ({data}: {data: any}) => <div className={styles.actorsContainer}>
                    {data.actors ? loadActors(data.actors) : 'Loading...'}
                </div>
                }
            </Query>
        </>;
    }
}