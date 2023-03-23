import { Container, Form, Input, Button, StyledLink } from "./style";

export default function RegisterPages() {
    return (
        <Container>
            <Form >
                <Input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    //onChange={handleChange}
                    value={FormData.nome}
                    requerid 
                />
                <Input 
                    type="number"
                    placeholder="CPF"
                    name="cpf"
                    required
                />
                <Input 
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    //onChange={handleChange}
                    value={FormData.password}
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