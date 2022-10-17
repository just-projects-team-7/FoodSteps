import React, { Component} from "react";

import "./Write.css";
class Write extends Component {
  state = {
    formData: {
      first_name: '',
      last_name: '',
      email: '',
      password1: '',
      password2: '',
    }
  } 
  constructor() {
    super();
    this.handleFormChange = this.handleFormChange.bind(this)
  }
  componentDidMount() {
    const passwordFields = document.querySelectorAll(".password-container");
    passwordFields.forEach(passwordField => {
      passwordField.addEventListener("click", e => {
        console.log(e.target.classList)
        if (e.target.classList.contains('show')) {
          if (passwordField.querySelector('input').getAttribute("type") === "text") {
            console.log('hello');
            passwordField.querySelector('input').setAttribute("type", "password")
          }
          else {
            passwordField.querySelector('input').setAttribute("type" ,"text")
          }
        }
      })
    })
  }
  handleFormChange(e) {
    this.setState({
      formData: {...this.state.formData, [e.target.name]: e.target.value}
    })
  }
  async submitForm(e) {
    e.preventDefault()
    let options = {
        method: 'POST',
        body: this.state.formData
    }
    fetch("https://davinci.pythonanywhere.com/authors/", options)
    .then(res => {console.log(res); return res})
    .catch(res => res)
  }
  render() { 
    return (
      <React.Fragment>
        <section id="page-form">
          <header>
            <h1>Write for us</h1>
          </header>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ex dolor excepturi iusto fugaassumenda, magni ea? Tempora provident ducimus eius reprehenderit ipsam consequuntur inciduntveniam. Omnis quo voluptates sequi!</p>
          <form action="#" method="POST" onSubmit={this.submitForm}>
            <div className="form">
              <div className="form-group name-container">
                <input type="text" name="first_name"placeholder="Enter first name" onChange={this.handleFormChange} value={this.state.formData.first_name}/>
                </div>
              <div className="form-group name-container"><input type="text" name ="last_name" placeholder="Enter last name" onChange={this.handleFormChange} value={this.state.formData.last_name} /></div>
              <div className="form-group"><input type="email" name="email" id="" placeholder="What's your email address" onChange={this.handleFormChange} value={this.state.formData.email} /></div>
              <div className="password-container form-group">
                <input type="password" name="password1" className="password" placeholder="Your password" onChange={this.handleFormChange} value={this.state.formData.password1} />
                <img className="show" src="./icons/eye.svg" alt="eye-icon" />
              </div>
              <div className="password-container form-group">
                <input type="password" name="password2" className="password" placeholder="Confirm your password" onChange={this.handleFormChange} value={this.state.formData.password2} />
                <img className="show" src="./icons/eye.svg" alt="eye-icon" />
              </div>
              <button className="btn" type="submit" value="">Become an Author</button>
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  };
}

export default Write;
