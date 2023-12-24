import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    
    const  handlerClick = () => {
        
        navigate('/play');
    }

    return(
        <div>
            <h1>
                Hello
            </h1>
            <button onClick={() => { handlerClick() }}>Go to game</button>
            
        </div>
    )
}

export default Home;