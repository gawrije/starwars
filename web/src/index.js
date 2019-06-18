import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
import UserRegistration from './pages/signup/user-registration/UserRegistration';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';
import styles from './styles/styles.scss';
import FilmList from './pages/films/FilmList';
import ActorList from './pages/actors/ActorList';

//import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory'
//import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from 'react-apollo'

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  //uri: "http://localhost:9000/graphql"
  uri: "https://gq0d1qb562.execute-api.ap-southeast-2.amazonaws.com/latest/graphql"
});

/*
const restLink = new RestLink({ uri: 'http://localhost:9000/graphql'});
const client = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
    responseTransformer: async response => response.json()
});*/

const Main = props =>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <div className="mainContainer">
                <Header />
                <div className="bodyContainer">
                    <Route path="/" exact component={UserRegistration} />
                    <Route path="/films" exact component={FilmList} />
                    <Route path="/people" exact component={ActorList} />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    </BrowserRouter>

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
