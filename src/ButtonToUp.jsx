import React from 'react'
import './styles/ButtonToUp.css'


const ButtonToUp = ({elemento}) => {
    const [showButton, setShowButton] =React.useState(false)

    function handleClick(event){
        /* event.preventDefault()
        const href = event.target.parentElement.getAttribute('href') */
        const scroll = document.querySelector(elemento)
        scroll.scrollIntoView({
            behavior: "smooth",
        })
    }
    
    React.useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function handleScroll(){
        const element = document.querySelector(elemento)
        const rect = element.getBoundingClientRect()
        if(rect.top < -200){
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    return (
        <div className={`buttonContainer ${showButton ? 'show' : ''}`}>
            <button className="button" onClick={handleClick}>
                <svg className="svgIcon" viewBox="0 0 384 512">
                    <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default ButtonToUp
