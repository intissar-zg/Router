import React, { useState } from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import App from './App'
import Description from './Description'
import './App.css';

const Router = () => {
    const [Movies, setMovies] = useState([
        {
        id:"1",
        title:"Blanche-Neige et les Sept Nains",
        description: "Blanche Neige est une très jolie princesse. Sa belle-mère, la Reine, sentant qu'un jour la beauté de Blanche Neige dépasserait la sienne donne l'ordre à son garde chasse de la tuer. N'ayant pas le courage d'exécuter ses ordres, il l'abandonne dans la forêt.",
        PosterURL:"blanche-neige.jpg",
        trailer:"https://www.youtube.com/embed/ffDnAIsLL1o",
        rating:5
    
      },
      {
        id:"2",
        title:"Cendrillon",
        description: "Cendrillon, une douce jeune fille, subit les méchancetés de sa belle-mère et de ses deux horribles filles. Un jour, transformée par sa marraine la bonne fée en princesse éclatante de beauté, elle se rend au bal du prince qui tombe fou amoureux d'elle",
        PosterURL:"cendrillon.jpg",
        trailer:"https://www.youtube.com/embed/QhTwYux1PE4",
        rating:4
    
      },
      {
        id:"3",
        title:"Alice au pays des merveilles",
        description: "Alice, jeune fille rêveuse, durant son cours d'histoire, s'évade dans un monde étrange dans lequel des fleurs chantantes côtoient un cheval volant, une chenille fumeuse, une reine jouant du crocket, ou un lapin tachant de ne pas être en retard.",
        PosterURL:"Alice.jpg",
        trailer:"https://www.youtube.com/embed/yu8pmBW75_I",
        rating:3
    
      }]);
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path='/' render ={()=> <App Movies={Movies} setMovies={setMovies}></App>}></Route>
        <Route exact path='/Description/:id' render ={(props)=> <Description {...props} Movies={Movies}></Description>}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router
