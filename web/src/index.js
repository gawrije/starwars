import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
import UserRegistration from './pages/signup/user-registration/UserRegistration';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';

const Main = props => <BrowserRouter>
    <>
        <Header/>
        <Route path="/" exact component={UserRegistration}/>
        <Footer/>
    </>
</BrowserRouter>

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
