import React from 'react'

const CardPokemons = ({url, dados}) => {
  /*
  // const [pokemon, setPokemom] = React.useState(null)
  // const [loading, setLoading] = React.useState(null) 

   React.useEffect(()=>{
    setLoading(true)
    fetch(url)
      .then((response)=>response.json()) 
      .then((json)=>setPokemom(json))
      .catch(()=>console.log('Error'))
      .finally(setLoading(false))
    
  }, [url])

  React.useEffect(()=>{
    console.log(dados);
  }, [])
  */
  
  return (
    <div className={`cardContainer ${dados.types[0].type.name}`}>
      <span className='pokemonId'>{dados.id}</span>
      <div className='pokemonDescription'>
        <p className='pokemonName'>{dados.name}</p>
        <ul>
          {dados.types.map((type)=>(
            <li key={type.type.name} className={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <img src={dados.sprites.other.dream_world.front_default} alt="" />
    </div>
  )
}

export default CardPokemons
