import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 667px;
    background-color: #0E0E13;
    display: flex;
    flex-direction: column;
    p {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
        margin-top: 20px;
        margin-bottom: 53px;
        margin-left: 130px;
    }
`

export const Topo = styled.div`
    .logo {
        width: 49px;
        height: 50px;
        margin-top: 32px;
        margin-left: 38px;
    }
    .person {
       margin-bottom: 30px;
        margin-left: 230px;
    }
`

export const PlanButtons = styled.div`
    button {
        width: 299px;
        height: 52px;
        background-color: #FF4791;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        border-radius: 8px;
        margin-bottom: 8px;
        margin-left: 38px;
    }
`

export const ButtonsFooter = styled.div`
    button {
        width: 299px;
        height: 52px;
        background-color: #FF4791;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        border-radius: 8px;
        margin-left: 38px;
    }
    .mudar {
        margin-top: 125px;
        margin-bottom: 8px;
    }
    .cancelar {
        background-color: #FF4747;
    }
`