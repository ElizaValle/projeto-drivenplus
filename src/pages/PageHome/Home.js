import { Link, useNavigate } from "react-router-dom";
import group1 from "../../assets/group1.png";
import person from "../../assets/person.png";
import { Container, Topo, PlanButtons, ButtonsFooter } from "./style";
import apiPlan from "../../services/apiPlan";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function Home() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [plan, setPlan] = useState();

    useEffect(() => {
        apiPlan.renders(user.token)
            .then(res => {
                setPlan(res.data);
            })
            .catch(err => {
                alert(err.response);
            });
    }, [user.token]);


    return (
        <Container>
            <Topo>
                {plan && plan.image && (
                    <img className="logo" src={plan.image} alt="logo driven" />
                )}
               {/*  <img className="logo" src={plan.image} alt="logo driven" /> */}
                <img className="person" src={person} alt="ícone usuário" />
            </Topo>
            <p>Olá, fulano</p>
            
            <PlanButtons>
                {plan && plan.perks && plan.perks.map((p) => (
                    <Link>
                        <button>{p.title}</button>
                    </Link>
                ))}
            </PlanButtons>
            
            {/* <PlanButtons>
                <Link><button>Solicitar brindes</button></Link>
                <Link><button>Materiais bônus de web</button></Link>
                <Link><button>Aulas bônus de tech</button></Link>
                <Link><button>Mentorias personalizadas</button></Link> 
            </PlanButtons> */}
            <ButtonsFooter>
                <button className="mudar" >Mudar plano</button>
                <button className="cancelar">Cancelar plano</button>
            </ButtonsFooter>
        </Container>
    );
}
