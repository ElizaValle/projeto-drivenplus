import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/driven.png"
import { Container, Form, Input, Button, StyledLink } from "./style";

export default function LoginPages() {
  /*   const [form, setForm] = useState({ email: '', password: '' });
    const { auth, login } = */

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/subscriptions");
        
    }


    return (
        <Container>
            <img src={logo} alt="logo driven" />

            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    //onChange={handleChange}
                    value={FormData.email}
                    //requerid 
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    //onChange={handleChange}
                    value={FormData.password}
                    //required 
                />

                <Button type="submit">
                    Entrar
                </Button>
            </Form>

            <StyledLink to="/sign-up">
                Não possui uma conta? Cadastre-se
            </StyledLink>
        </Container>
    );
}