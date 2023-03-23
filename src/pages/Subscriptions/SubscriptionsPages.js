import logo1 from "../../assets/group1.png";
import logo2 from "../../assets/group2.png";
import logo3 from "../../assets/group3.png";
import { Container, PlanOne, PlanTwo, PlanThree } from "./style";

export default function SubscriptionsPages() {
    return (
        <Container>
            <p>Escolha seu Plano</p>

            <PlanOne>
                <img src={logo1} alt="logo driven"/>
                <span>R$ 39,99</span>
            </PlanOne>

            <PlanTwo>
                <img src={logo2} alt="logo driven"/>
                <span>R$ 69,99</span>
            </PlanTwo>

            <PlanThree>
                <img src={logo3} alt="logo driven"/>
                <span>R$ 99,99</span>
            </PlanThree>
        </Container>
    );
}