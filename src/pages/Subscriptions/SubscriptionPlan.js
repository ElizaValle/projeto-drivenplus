import { Link } from "react-router-dom";
import logo1 from "../../assets/group1.png";
import vector from "../../assets/vector.png";
import money from "../../assets/money.png";
import seta from "../../assets/seta.png";
import { 
    Container2, ImageSeta, Perks, Benefits, Price,
    Form, Input, Inputs, Button 
} from "./style";

export default function SubscriptionPlan() {
    return (
        <Container2>
            <ImageSeta to="/subscriptions">
                <img src={seta} alt="seta" />
            </ImageSeta>
            <img src={logo1} alt="logo driven" />
            <span>Driven Plus</span>

            <Perks>
                <Benefits>
                    <div>
                        <img src={vector} alt="imagem" />
                        <p>Benefícios:</p>
                    </div>
                    <ol>
                        <Link><li>Brindes exclusivos</li></Link>
                        <Link><li>Materiais bônus de web</li></Link>
                    </ol>
                </Benefits>

                <Price>
                    <div>
                        <img src={money} alt="imagem dinheiro" />
                        <p>Preço:</p>
                    </div>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </Price>

                <Form>
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
                    <Button>
                        ASSINAR
                    </Button>
                </Form>
            </Perks>
        </Container2>
    );
}