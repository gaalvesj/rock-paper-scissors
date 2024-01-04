import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    
    const  handlerClick = () => { navigate('/game') }

    return(
        <div>
            <h1>
                Jan-Ken-Pon
            </h1>
            <p>
                Are you redy for a play?
            </p>
            <button onClick={() => { handlerClick() }}>Go to game</button>
            
        </div>
    )
}

export default Home;