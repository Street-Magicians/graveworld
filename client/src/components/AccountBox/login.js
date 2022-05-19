import React, { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import AccountBox from "../AccountBox";
import { BoxContainer, BoldLink, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import Auth from "../../utils/auth";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import Signup from "../../pages/Signup";

// defines LoginForm tag element
const LoginForm = () => {
    const { switchToSignin } = useContext(AccountContext);
    // set states with initial values
    const [userFormData, setUserFormData] = useState({ email: "", password: "" });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN);

    // on state change, check if error occurs and alert as necessary
    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    // as user inputs information into the form, update the state of the associated input target
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    // checks user input and completes login if validated
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setUserFormData({
            email: "",
            password: "",
        });
    };

    // return contents of LoginForm tag element
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">
                {" "}
                Don't have an accoun?{" "}
                <BoldLink href="/signup" onClick={Signup}>
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
};

export default LoginForm;
