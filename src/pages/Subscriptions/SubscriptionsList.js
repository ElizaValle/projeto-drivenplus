import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import apiPlan from "../../services/apiPlan";
import { Container, Plans } from "./style";

export default function SubscriptionsList() {
    const [plans, setPlans] = useState();
    const { user } = useContext(UserContext);
    const { idPlan } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        apiPlan.renders(user.token)
            .then(res => {
                setPlans(res.data);
            })
            .catch(err => {
                alert(err.response);
            });
    }, [user.token]);

    function handlePlanClick() {
        navigate(`/subscriptions/${idPlan}`);
    }

    return (
        <Container>
            <p>Escolha seu Plano</p>
            {plans && plans.map((plan) => (
                <Plans>
                    <Plan 
                        key={plan.id} 
                        image={plan.image}
                        price={plan.price}
                        onClick={() => handlePlanClick(plan.id)}
                    />
                </Plans>
            ))}        
        </Container>
    );
}

function Plan({ image, price, onClick }) {
    return (
        <div onClick={onClick}>
            <img src={image} alt="logo driven" />
            <span>{price}</span>
        </div>
    );
}
