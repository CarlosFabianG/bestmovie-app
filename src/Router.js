import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Movie from './pages/Movie';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function Router() {
    return(
        <BrowserRouter>
        <NavBar />  
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/genre/movies/:genre_id' component={Genre}/>
            <Route exact path='/genre/movies/detail/:id' component={Movie}/>
            <Route component={NotFound} />
        </Switch>
        < Footer /> 
        </BrowserRouter>
    )
}

export default Router;