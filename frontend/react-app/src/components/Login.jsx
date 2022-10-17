import React, { Component } from 'react';

import "./Login.css"
class LogIn extends Component {
    state = {  } 
    async submitForm(param) {
        let options = {
            method: 'POST',
            body: {
                email: param.email,
                password: param.password
            }
        }
        fetch("https://davinci.pythonanywhere.com/authors/", options)
        .then(res => {console.log(res); return res})
    }
    render() { 
        return (
            <section id="login">
                <form action="#" method="POST">
                    <input type="email" name="email" />
                    <input type="password" name="password" />
                    <button type="submit">sumbit</button>
                </form>
            </section>
        );
    }
}
 
export default LogIn;