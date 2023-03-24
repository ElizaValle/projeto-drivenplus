import { Link, useNavigate, useParams } from "react-router-dom";
import vector from "../../assets/vector.png";
import money from "../../assets/money.png";
import seta from "../../assets/seta.png";
import { 
    Container2, ImageSeta, Perks, Benefits, Price,
    Form, Input, Inputs, Button 
} from "./style";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import apiPlan from "../../services/apiPlan";

export default function SubscriptionPlan() {
    const [plan, setPlan] = useState({
        id: null,
        name: "",
        image: "",
        price: "",
        perks: []
    });
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(plan)

    useEffect(() => {
        apiPlan.signPlan(user.token, /* .id */)
            .then(res => {
                setPlan(res.data);
            })
            .catch(err => {
                alert(err.response);
            });
    }, [user.token, /* .id */]);

    function toSign() {
        navigate("/home");
    }

    return (
        <Container2>
            <ImageSeta to="/subscriptions">
                <img src={seta} alt="seta" />
            </ImageSeta>
            <img src={plan.image} alt="logo driven" />
            <span>{plan.name}</span>

            <Perks>
                <Benefits>
                    <div>
                        <img src={vector} alt="imagem" />
                        <p>Benefícios:</p>
                    </div>
                    <ol>
                        <Link><li>{plan.perks.title}</li></Link>
                        <Link><li>{plan.perks.title}</li></Link>
                    </ol>
                </Benefits>

                <Price>
                    <div>
                        <img src={money} alt="imagem dinheiro" />
                        <p>Preço:</p>
                    </div>
                    <p>{plan.price} cobrados mensalmente</p>
                </Price>

                <Form onSubmit={toSign}>
                    <Input
                        type="text"
                        placeholder="Nome impresso no cartão" 
                    />
                    <Input
                        type="number"
                        placeholder="Digitos do cartão" 
                    />
                    <Inputs>
                        <Input
                            type="number"
                            placeholder="Código de segurança" 
                        />
                        <Input
                            //type="date"
                            placeholder="Validade" 
                        />
                    </Inputs>
                    <Button type="submit">
                        ASSINAR
                    </Button>
                </Form>
            </Perks>
        </Container2>
    );
}