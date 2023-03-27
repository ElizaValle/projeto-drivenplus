import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/driven.png"
import { UserContext } from "../../contexts/UserContext";
import apiAuth from "../../services/apiAuth";
import { Container, Form, Input, Button, StyledLink } from "./style";

export default function LoginPages() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [hasPlan, setHasPlan] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const { user,setUser } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(user)

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();

        apiAuth.login(form)
            .then(res => {
                console.log(res.data);
                const { id, name, cpf, email, membership, token } = res.data;
                setUser({ id, name, cpf, email, membership, token });
                //navigate("/subscriptions");
                if(membership !== null) {
                    setHasPlan(true);
                }
                setLoggedIn(true);
            })
            .catch(err => {
                alert(`Erro: err.response.data`);
                console.log(err.response.data.message);
            });
    } 

    useEffect(() => {
        if(loggedIn) {
            if(hasPlan) {
                navigate("/home");
            } else {
                navigate("/subscriptions");
            }
        }
    })

    return (
        <Container>
            <img src={logo} alt="logo driven" />

            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                    requerid 
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleForm}
                    value={form.password}
                    required 
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