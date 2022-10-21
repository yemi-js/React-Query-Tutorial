import React from 'react'

const PlanetCard = ({ planet }) =>
{
      

      
  return (
      <div className='flex flex-col  bg-green-100 p-6 h-full'>
              <h1 className='font-bold text-lg'>{planet.name}</h1>
              <h1>Population: {parseFloat(planet.population).toLocaleString('en-US')} </h1>
              <p>Terrain: {planet.terrain}</p>
      </div>
  )
}

export default PlanetCard