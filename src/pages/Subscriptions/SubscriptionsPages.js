import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/group1.png";
import logo2 from "../../assets/group2.png";
import logo3 from "../../assets/group3.png";
import UserContext from "../../contexts/UserContext";
import apiPlan from "../../services/apiPlan";
import { Container, Plans } from "./style";

export default function SubscriptionsPages() {
    const [plans, setPlans] = useState();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(getPlans, []);

    function getPlans() {
        apiPlan.signPlan(user.token)
            .then(res => {
                console.log(res.data);
                setPlans(res.data);
                navigate("/subscriptions/idPlan")
            })
            .catch(err => {
                alert(err.response);
            });
    }

    return (
        <Container>
            <p>Escolha seu Plano</p>
            {plans && plans.map((plan) => (
                <Plans 
                    key={plan.id} 
                    type="submit"
                    id={plan.id}
                    image={plan.image}
                    price={plan.price}
                />
            ))}        
        </Container>
    );
}

function Plan({ image, price }) {
    return (
        <>
            <img src={image} alt="logo driven" />
            <span>{price}</span>
        </>
    );
}





/* <PlanOne type="submit">
                <img src={logo1} alt="logo driven"/>
                <span>R$ 39,99</span>
            </PlanOne>

            <PlanTwo type="submit">
                <img src={logo2} alt="logo driven"/>
                <span>R$ 69,99</span>
            </PlanTwo>

            <PlanThree type="submit">
                <img src={logo3} alt="logo driven"/>
                <span>R$ 99,99</span>
            </PlanThree> */