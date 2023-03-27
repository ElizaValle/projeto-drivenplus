import { Link, useNavigate } from "react-router-dom";
import group1 from "../../assets/group1.png";
import person from "../../assets/person.png";
import { Container, Topo, PlanButtons, ButtonsFooter } from "./style";

export default function Home() {
    const navigate = useNavigate();

    


    return (
        <Container>
            <Topo>
                <img className="logo" src={group1} alt="logo driven" />
                <img className="person" src={person} alt="ícone usuário" />
            </Topo>
            <p>Olá, fulano</p>
            <PlanButtons>
                <Link><button>Solicitar brindes</button></Link>
                <Link><button>Materiais bônus de web</button></Link>
                <Link><button>Aulas bônus de tech</button></Link>
                <Link><button>Mentorias personalizadas</button></Link> 
            </PlanButtons>
            <ButtonsFooter>
                <button className="mudar" >Mudar plano</button>
                <button className="cancelar">Cancelar plano</button>
            </ButtonsFooter>
        </Container>
    );
}