import React from "react";
import Input from "../components/form/Input"
import Button from "../components/form/Button"

export default class Form extends React.Component {
    render() {
        return <form className="block form"
            onSubmit={
                (event) => {
                    const _inputField = document.querySelectorAll('input');
                    const userName = _inputField[0];
                    const userPass = _inputField[1];
                    event.preventDefault();
                    console.log(`Name: ${userName.value}\nPassword: ${userPass.value}`)
                }
            }>
            <Input
                type="text"
                placeholder="Your Name"
            />
            <Input
                type="password"
                placeholder="Your Password"
            />
            <Button />
        </form>
    }
}

