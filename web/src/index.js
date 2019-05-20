import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
import UserRegistration from './pages/signup/user-registration/UserRegistration';
import { Header } from './shared/header/Header';
import { Footer } from './shared/footer/Footer';
import styles from './styles/styles.scss';

const Main = props => <BrowserRouter>
    <>
            <div className="mainContainer">
            <Header/>
            <div className="bodyContainert">
                <Route path="/" exact component={UserRegistration}/>
            </div>
            <Footer/>
            </div>
    </>
</BrowserRouter>

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
