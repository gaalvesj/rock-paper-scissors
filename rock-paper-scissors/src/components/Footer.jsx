import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/styledComponents";


function Footer() {
    const navigate = useNavigate();

    const handlerClickRules = () => { navigate('/rules')}

    return(
        <div className="flex flex-col place-items-center ">

            <StyledButton onClick={handlerClickRules}>
                Rules
            </StyledButton>
        </div>
    )
}

export default Footer;