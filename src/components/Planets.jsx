import React from 'react'
import { useQuery } from 'react-query'
import PlanetCard from './PlanetCard'

const fetchPlanet = async () =>
{
  const res = await fetch("https://swapi.dev/api/planets/")
  return res.json()
}
 
const Planets = () => 
{
  const { data, status } = useQuery("planets", fetchPlanet)
  console.log(data)
  
  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && 
        <h1>Loading....</h1>
      }
      {status === "error" && 
        <h1>Sorry, no data available</h1>
      }
      {status === "success" && 
        
        <div className='grid grid-flow-row grid-cols-3 gap-4'>
          {data.results.map(planet => (
          
          <div> 
           <PlanetCard key={planet.id} planet={planet} />
          </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Planets