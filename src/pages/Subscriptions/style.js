import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 29px;
    display: flex;
    flex-direction: column;
    background-color: #0E0E13;
    box-sizing: border-box;
    p {
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        padding-left: 56px;
        padding-bottom: 24px;
    }
`

export const Plans = styled.div`
    width: 290px;
    height: 180px;
    margin-left: 43px;
    margin-bottom: 15px;
    border: 3px solid #7E7E7E;
    background-color: #0E0E13;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`
export const Container2 = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0E0E13;
    box-sizing: border-box;
    img {
        width: 139px;
        height: 95px;
    }
    span {
        font-weight: 700;
        font-size: 32px;
        color: #FFFFFF;
        padding-top: 12px;
    }
    p {
        color: #FFFFFF;
    }
`
export const ImageSeta = styled(Link)`
      img {
        width: 28px;
        height: 27px;
        margin: 34px -168px;
    }
`

export const Perks = styled.div`
    display: flex;
    flex-direction: column;
`

export const Benefits = styled.div`
    padding-top: 22px;
    div {
        display: flex;
        
    }
    div > img {
        width: 12px;
        height: 16px;
        margin-right: 5px;
    }
    div > p {
        font-weight: 400;
        font-size: 16px;
        padding-bottom: 5px;
        
    }
    a > li {
        color: #FFFFFF;
        font-weight: 400;
        font-size: 14px;
        padding-top: 2px;
    }
`

export const Price = styled.div`
     margin-bottom: 34px;
     padding-top: 12px;
    div {
        display: flex;
    }
    div > img {
        width: 15px;
        height: 10px;
        margin-right: 5px;
    }
    div > p {
        font-weight: 400;
        font-size: 16px;
        padding-bottom: 5px;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        padding-bottom: 5px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        padding-left: 14px;
    }
`

export const Input = styled.input`
    width: 299px;
    height: 52px;
    background-color: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 8px;
`

export const Inputs = styled.div`
    input {
        width: 145px;
        height: 52px;
        background-color: #FFFFFF;
        border-radius: 8px;
        padding-left: 6px;
        margin-right: 8px;
    }
`

export const Button = styled.button`
    width: 299px;
    height: 52px;
    background-color: #FF4791;
    border-radius: 8px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 34px;
`

/* export const PlanOne = styled.button`
    width: 290px;
    height: 180px;
    margin-left: 43px;
    margin-bottom: 10px;
    border: 3px solid #7E7E7E;
    background-color: #0E0E13;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`

export const PlanTwo = styled.button`
    width: 290px;
    height: 180px;
    margin-left: 43px;
    margin-bottom: 10px;
    border: 3px solid #7E7E7E;
    background-color: #0E0E13;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
`

export const PlanThree = styled.button`
    width: 290px;
    height: 180px;
    margin-left: 43px;
    margin-bottom: 16px;
    border: 3px solid #7E7E7E;
    background-color: #0E0E13;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        font-weight: 700;
        font-size: 24px;
        color: #FFFFFF;
    }
` */