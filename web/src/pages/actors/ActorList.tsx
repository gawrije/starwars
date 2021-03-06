import React from 'react';
import { Query } from "react-apollo";
import  { Link } from 'react-router-dom';
import { QUERY_ACTORS } from '../../classes/query';
import HeaderContainer from '../../shared/header-container/HeaderContainer';
import styles from './ActorList.module.scss';

const loadActors = (actors: IActor[]) => {
    return actors.map((actor: IActor) => {
        return <div key={actor.id} className={styles.actor}>
             <Link to={`/films?actorId=${actor.id}`}>{actor.name}</Link>
             
        </div>;
    })
}

export default class ActorList extends React.Component {

    render() {
        
        return <>
            <HeaderContainer title="People"></HeaderContainer>
            <Query query={QUERY_ACTORS}>
                { ({data}: {data: any}) => <div className={styles.actorsContainer}>
                {console.log(data)}
                    {data.actors ? loadActors(data.actors) : 'Loading...'}
                </div>
                }
            </Query>
        </>;
    }
}