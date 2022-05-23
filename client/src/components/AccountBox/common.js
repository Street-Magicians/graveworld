import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const BoldLink = styled.a`
    font-size: 11px;
    color: rgb(36, 123, 123);
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`;

export const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    font-size: 12px;
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(94, 210, 170);
    background: linear-gradient(90deg, rgba(94, 210, 170, 1) 17%, rgba(48, 140, 108, 1) 46%, rgba(103, 174, 145, 1) 70%, rgba(132, 205, 180, 1) 100%);
    &:hover {
        filter: brightness(1.03);
    }
`;
