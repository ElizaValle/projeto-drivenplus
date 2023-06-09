import fechar from "../../assets/fechar.png";
import { BACKGROUND_STYLE, MODAL_STYLE, BUTTON_STYLE} from "./styleModal";
import { useNavigate } from "react-router-dom";
import apiPlan from "../../services/apiPlan";

export default function Modal({ isOpen, plan, token, form, setModalOpen }) {
    const navigate = useNavigate();

    function sendRequest() {
        apiPlan.signPlan(token, form)
            .then(() => {
                navigate("/home");
            })
            .catch(err => {
                alert(err.response.data);
            }); 
    }


    if(isOpen) {
        return (
            <BACKGROUND_STYLE>
                <button onClick={setModalOpen}>
                    <img src={fechar} alt="ícone de fechar" />
                </button>
                <MODAL_STYLE>
                    <p>
                        Tem certeza que deseja 
                        assinar o plano 
                        {plan.name} (R$ {plan.price})?
                    </p>
                    <BUTTON_STYLE>
                        <button style={BUTTON_NOT} onClick={setModalOpen}>NÃO</button>
                        <button onClick={sendRequest} style={BUTTON_YES}>SIM</button>
                    </BUTTON_STYLE>
                </MODAL_STYLE>
            </BACKGROUND_STYLE>
        );
    }

    return null;
}

const BUTTON_NOT = {
    width: '95px',
    height: '52px',
    marginRight: '14px',
    borderRadius: '8px',
    color: '#FFFFFF',
    backgroundColor: '#CECECE'
}

const BUTTON_YES = {
    width: '95px',
    height: '52px',
    borderRadius: '8px',
    color: '#FFFFFF',
    backgroundColor: '#FF4791'
}