import { useNavigate } from "react-router-dom";


function Footer() {
    const navigate = useNavigate();

    const handlerClickRules = () => { navigate('/rules')}

    return(
        <div>
            <button onClick={handlerClickRules}>
                Regras
            </button>
        </div>
    )
}

export default Footer;