import React from 'react'
import CardPokemons from './CardPokemons'
import './styles/Modal.css'

const Modal = ({dados, active, setModal}) => {
    const [animation, setAnimation] = React.useState('')

    React.useEffect(() => {
        if (animation === 'slideUp') {
            console.log(animation);
            document.querySelector('.modal').classList.add('slideUp')
            setTimeout(()=>{
                setAnimation('');
                setModal(false);
            }, 400) 
        }
    }, [animation, setModal]);


    function handleClick(){
        setAnimation('slideUp');
    }

    if(active){
        return (
            <div className="modal">
                <h1>Resultado da Pesquisa</h1>
                <CardPokemons dados={dados}/>
                <button onClick={handleClick}>Fechar</button>
            </div>
        )
    }else{
        return null
    }
}

export default Modal
