import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/styledComponents"

function Modal() {
const navigate = useNavigate();

const handleClickBack = () =>{
    navigate('/game')
}
    return (
        <div className=" flex justify-center flex-col place-items-center">

        <li>   Rocks wins scissors </li> 
        <li>   Paper wins rocks</li> 
        <li>  Scissors wins paper</li>
        <StyledButton onClick={handleClickBack}>I Understood!</StyledButton> 


        </div>
    )

}


export default Modal;