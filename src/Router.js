import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Movie from './pages/Movie';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function Router() {
    return(
        <BrowserRouter>
        <NavBar />  
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/genre/movies' component={Genre}/>
            <Route exact path='/genre/movies/:id' component={Movie}/>
        </Switch>
        < Footer /> 
        </BrowserRouter>
    )
}

export default Router;