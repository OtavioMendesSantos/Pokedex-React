import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CardPokemons from './CardPokemons'
import UseFetch from './UseFetch'
import Button from './Button'
import Loading from './Loading'
import './styles/App.css'
import ButtonToUp from './ButtonToUp'
import SearchInput from './SearchInput'

function App() {
  const [range, setRange] = React.useState(0)
  const [pokemons, setPokemons] = React.useState([])
  const {data, error, loading, request} = UseFetch()
  const limit = 20;

  React.useEffect(()=>{
    /* async function fetchDados(){
      const {response, json} = await request(`https://pokeapi.co/api/v2/pokemon?offset=${range}&limit=${limit}`)
      //console.log(response, json);
    }
    fetchDados() */

    async function fetchDados(index){
      const {response, json} = await request(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      return json
    }
    
    let promisses = [];

    for (let index = range + 1; index < (range + limit + 1); index++) {
      promisses.push(fetchDados(index))
    }

    Promise.all(promisses).then((results)=>{
      setPokemons([...pokemons, ...results])
    })
  },[request, range])

  /* React.useEffect(()=>{
      console.log(pokemons.length)
  },[pokemons]) */

  function handleClick(){
    setRange(range + 20);
  }

  if(pokemons.length == 0){
    return null
  }

  return (
    <>
      <Header />
      <main>  
        <SearchInput />

        <div className='container'>
          
          {pokemons && pokemons.map((item)=> ( <CardPokemons key={item.id} dados={item} />))}
          
        </div>

        {loading && <Loading />}
  
        <Button text={loading ? 'Carregando' : 'Carregar Mais...'} callback={loading ? null : handleClick}/>
        
        <ButtonToUp elemento={'header'}/>
      </main>
      <Footer />
    </>
  )
}

export default App
