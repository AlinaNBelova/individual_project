import React,  {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Application from './components/Application';
import mapboxgl from 'mapbox-gl';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Container from './components/Container'
import Parks from './components/Parks'
import AboutMe from './components/AboutMe'
import 'materialize-css/dist/css/materialize.min.css'
import{createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';
import Cluster from './components/Cluster'
import ParksMap from './components/ParksMap'
let saveToLocalStorage = (state)=>{
  try{
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState)
    //localStorage['state']=seriaalizeState

  }
  catch(e){
    console.log(e)
  }
}
let loadFromLocalStorage=()=>{
  try{
    const serializeState=localStorage.getItem('state');
    if(serializeState===null){
      return undefined
    }
    else{
      return JSON.parse(serializeState)
    }

  }
  catch(e){
    console.log(e);
    return undefined
  }
}

const persistedState=loadFromLocalStorage()





let store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  ReactDOM.render(
  
    <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Application} />
        <Route exact path="/container" component={Container} />
        <Route exact path = "/parks" component ={Parks}/>
        <Route exact path = "/aboutme" component={AboutMe}/>
        <Route exact path = '/cluster' component={Cluster}/>
        <Route exact path = '/parksmap' component={ParksMap}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
     document.getElementById('app'));


