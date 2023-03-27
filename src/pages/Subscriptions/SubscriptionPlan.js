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
//import apiAuth from "../../services/apiAuth";
import Modal from "./Modal";

export default function SubscriptionPlan() {
    const { idPlan } = useParams();
    const [form, setForm] = useState({
        membershipId: idPlan,
        cardName: "",
        cardNumber: "",
        securityNumber: "",
        expirationDate: ""
    });
    const [plan, setPlan] = useState({
        id: null,
        name: "",
        image: "",
        price: "",
        perks: []
    });
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(UserContext);
    //const navigate = useNavigate();

    console.log(plan)

    useEffect(() => { 
        apiPlan.displayPlan(user.token, idPlan)
            .then(res => {
                setPlan(res.data);
            })
            .catch(err => {
                alert(err.response);
            });
    }, [user.token, idPlan]);

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function toSign(e) {
        e.preventDefault();
        setOpenModal(true);

        //se clicar botão SIM ==> requisição é enviada


       /*  apiAuth.signUp(form)
            .then(() => {
                setOpenModal(true);
                navigate("/home");
            })
            .catch(err => {
                setOpenModal(false);
                alert(err.response.data);
            }); */
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
                        {plan.perks.map((perk) => (
                            <li key={perk.id}>
                                <Link>{perk.title}</Link>
                            </li>
                        ))}
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
                        name="cardName"
                        value={form.cardName}
                        onChange={handleForm}
                        required
                    />
                    <Input
                        type="number"
                        placeholder="Digitos do cartão" 
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleForm}
                        required
                    />
                    <Inputs>
                        <Input
                            type="number"
                            placeholder="Código de segurança" 
                            name="securityNumber"
                            value={form.securityNumber}
                            onChange={handleForm}
                            required
                        />
                        <Input
                            //type="date"
                            placeholder="Validade"
                            name="expirationDate"
                            value={form.expirationDate}
                            onChange={handleForm}
                            required 
                        />
                    </Inputs>
                    <Button type="submit">
                        ASSINAR
                    </Button>
                    <Modal 
                        isOpen={openModal}
                        plan={plan} 
                        form={form}
                        setModalOpen={() => setOpenModal(!openModal)} 
                    />
                </Form>
            </Perks>
        </Container2>
    );
}