import React from 'react'

const PokemonThumbnail = ({id, name, image, type}) => {

  const style = `thumb-container ${type}`  
  return (
    <div className={style}>
        <div className='shiny-button'>
            <button>SHINY</button>
            <span></span>
            <button>STAR</button>
        </div>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className="detail-wrapper">
            <h1>{name}</h1>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonThumbnail