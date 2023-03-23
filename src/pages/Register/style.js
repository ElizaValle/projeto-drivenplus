import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0E0E13;
    display: flex;
    flex-direction: column;
`
export const Form = styled.form`
    margin-top: 147px;
`

export const Input = styled.input`
    width: 299px;
    height: 52px;
    margin-left: 38px;
    margin-right: 38px;
    margin-bottom: 16px;
    padding-left: 15px;
    border-radius: 8px;
    background-color: "#FFFFFF";
`

export const Button = styled.button`
    width: 298px;
    height: 52px;
    margin-left: 38px;
    margin-right: 38px;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    background-color: #FF4791;

`

export const StyledLink = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    color: white;
    margin-bottom: 148px;
    margin-left: 101px;
    text-decoration: underline;
`