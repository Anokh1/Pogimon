import React, { useState, useEffect } from "react";
import DigimonThumbnail from "../components/DigimonThumbnail";
const cors = require("cors");  
//const pageNumber = 0; 

function Digimon(){
    //return <h1>Pokemon</h1>
    const [allDigimons, setAllDigimons] = useState([])
    const [loadMore, setLoadMore] = useState(`/api/v1/digimon`)

    // https://digimon-api.vercel.app/api/digimon

    /*const [loadMore, setLoadMore] = useState(
        cors({
            origin: 'https://digi-api.com/api/v1/digimon'
        }))*/

  
    const getAllDigimons = async () => {
      const res = await fetch(loadMore)
      const data = await res.json()
  
      setLoadMore(data.next)
      

      // need to understand how this works...
      function createDigimonObject(content){
        content.forEach( async (digimon) => {
          const res = await fetch(`/api/v1/digimon/${digimon.name}`)

          //https://digimon-api.vercel.app/api/digimon/name/

          const data = await res.json()
  
          setAllDigimons(currentList => [...currentList, data])
          //allPokemons.push(data)
          console.log(digimon); 
        })
      }
      createDigimonObject(data.content)
      //await console.log(allPokemons)
    }
  
    useEffect(() => {
      getAllDigimons()
    }, [])
    
  
    return (
      <div className="figimon-app-container">
        <h1>Digimon Evolution</h1>
        <div className="digimon-container">
          <div className="all-container"> 
            { allDigimons.map((digimon, index) => 
              <DigimonThumbnail
                id={digimon.id}
                name={digimon.name}
                //image={pokemon.sprites.other.dream_world.front_default}
                //image={pokemon.sprites.other.home.front_default}
                image={digimon.images[0].href}
                type={digimon.types[0].type}
                key={index}
              />  
            )}
          </div>
          <button className="load-more" onClick={() => getAllDigimons()}>More Digimons</button>
        </div>
      </div>
    );
}

export default Digimon; 