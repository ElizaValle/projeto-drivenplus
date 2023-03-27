import styled from "styled-components";

export const BACKGROUND_STYLE = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0,0,0,0.7);
    z-Index: 1000;
    display: flex;
    button:first-child {
        width: 28px; 
        height: 24px;
        border: none;
        background-color: transparent;
    }
    img {
        width: 28px; 
        height: 24px;
        margin-top: 25px;
        margin-left: 327px 
    }
`

export const MODAL_STYLE = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 248px;
    height: 210px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 12px;
    p {
        color: #000000;
        font-weight: 700;
        font-size: 21px;
        margin-top: 30px;
        margin-left: 22px;
        margin-right: 22px
    }
`

export const BUTTON_STYLE = styled.div`
    margin-top: 33px;
    margin-left: 22px; 
    display: flex
`
