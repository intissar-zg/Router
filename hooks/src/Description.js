import React from 'react'
import './App.css';

const Description = ({Movies,match}) => {
    return (
        <div className="description">
            <h1 style={{color:"mediumorchid", marginTop:30}}>Movies</h1>
          <p > {Movies.find(el=>el.id===match.params.id).description} </p>
           <iframe width="560" height="315" src={Movies.find(el=>el.id===match.params.id).trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Description
