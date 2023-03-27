import group1 from "../../assets/group1.png";
import person from "../../assets/person.png";
import { Container, Topo, PlanButtons, ButtonsFooter } from "./style";

export default function Home() {
    return (
        <Container>
            {/* <img className="logo" src={group1} alt="logo driven" />
            <img className="person" src={person} alt="ícone usuário" /> */}
            <Topo>
                <img className="logo" src={group1} alt="logo driven" />
                <img className="person" src={person} alt="ícone usuário" />
            </Topo>
            <p>Olá, fulano</p>
            <PlanButtons>
                <button>Solicitar brindes</button>
                <button>Materiais bônus de web</button>
                <button>Aulas bônus de tech</button>
                <button>Mentorias personalizadas</button>
            </PlanButtons>
            <ButtonsFooter>
                <button className="mudar" >Mudar plano</button>
                <button className="cancelar">Cancelar plano</button>
            </ButtonsFooter>
        </Container>
    );
}