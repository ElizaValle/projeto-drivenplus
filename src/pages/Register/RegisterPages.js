import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";
import { Container, Form, Input, Button, StyledLink } from "./style";

export default function RegisterPages() {
    const [form, setForm] = useState({ email: "", name: "", cpf: "", password: "" });
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleRegister(e) {
        e.preventDefault();

        apiAuth.signUp(form)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    }

    return (
        <Container>
            <Form onSubmit={handleRegister}>
                <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    requerid 
                />
                <Input 
                    type="number"
                    placeholder="CPF"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleForm}
                    required
                />
                <Input 
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    required 
                />

                <Button type="submit">
                    Cadastrar
                </Button>
            </Form>

            <StyledLink to="/">
                Já possui uma conta? Entre
            </StyledLink>
        </Container>
    );
}