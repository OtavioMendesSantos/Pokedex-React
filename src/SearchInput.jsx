import React from 'react'
import search from './assets/search.svg'
import Modal from './Modal'

const SearchInput = () => {
    const [resultado, setResultado] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [pesquisa, setPesquisa] = React.useState(null)
    const [modal, setModal] = React.useState(false)

    function validateRegex(str){
        const regex = /^(?:[0-9]*|[a-zA-Z]*)$/;
        return regex.test(str);
    }

    function handleClick(){
        const input = document.querySelector('.searchInput')    
        let {value} = input    
        
        if(!!value.trim()){
            if(validateRegex(value)){
                setPesquisa(value.toLowerCase())
            } else {
                alert('Digite apenas números(0-9) OU letras( [a-z | A-Z] ), sem caracteres especiais. ')
            }
        } else {
            alert('Insira um valor válido!')
        }
        
        input.value = ''
    }

    React.useEffect(()=>{
        if(pesquisa !== null){

            async function fetchDados(str){
                let response
                let json
                try{
                    setLoading(true)
                    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${str}/`)
                      
                    if (!response.ok) {
                        throw new Error('Erro ao buscar dados, Pokémon ou Id Incorreto(a) e/ou Inexistente');
                    }
        
                    json = await response.json()
                    
                } catch (erro) {
                    alert(erro);
                    return null;
                } finally {
                    setLoading(false)
                }
                
                return json
            }
            fetchDados(pesquisa).then((data)=>{
                setResultado(data)
                setPesquisa(null)
            })
            
        }
    }, [pesquisa])

    React.useEffect(()=>{
        if (resultado) {
            setModal(true)
        }
    }, [resultado])

    return (
        <>
            <div className='inputContainer'>
                <input type='text' placeholder='Pesquise um Pokémon por Nome ou ID' className='searchInput'/>
                <button onClick={handleClick}><img src={search} alt="" /></button>
            </div>
            {resultado && <Modal dados={resultado} active={modal} setModal={setModal}/>}
        </>
    )
}

export default SearchInput
