import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/styledComponents"


function Home() {
    const navigate = useNavigate();
    
    const  handlerClick = () => { navigate('/game') }

    return(
        <div className="flex flex-col place-items-center ">
            <h1 className="text-2xl font-bold">
                Jan-Ken-Pon
            </h1>
            <h1 className="text-lg font-bold size-1.2">
                 You redy for a play?
            </h1>
            <StyledButton onClick={() => { handlerClick() }}>Go to game</StyledButton>
            
        </div>
    )
}

export default Home;