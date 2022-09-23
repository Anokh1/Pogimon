import React from 'react'

const DigimonThumbnail = ({id, name, image, type}) => {

  const style = `digimon-thumb-container ${type}`  
  return (
    <div className={style}>
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

export default DigimonThumbnail