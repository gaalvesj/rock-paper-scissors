import { useNavigate } from "react-router-dom";


function Modal() {
const navigate = useNavigate();

const handleClickBack = () =>{
    navigate('/game')
}
    return (
        <div>

        <li>   Pedra ganha da tesoura (amassando-a ou quebrando-a).</li> 
        <li>  Tesoura ganha do papel (cortando-o).</li> 
        <li>  Papel ganha da pedra (embrulhando-a).</li>
        <button onClick={handleClickBack}>Back</button> 


        </div>
    )

}


export default Modal;