import React from 'react'
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      telephone: ""
    };
    this.validator = new SimpleReactValidator({
      className: "absolute z-20 top-0 right-0 text-5xl w-32 h-32 bg-red-800 rounded-full leading-none -mt-1 -mr-1 text-yellow-light p-1 px-2",
      messages: {
        default: '*'
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
        <form
          className="form text-black"
          name="quick-contact"
          method="post"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            {/* <p hidden>
                Don't fill this out:{" "} */}
                <label className="hidden">Do not fill this in<input name="bot-field" /></label>
            {/* </p> */}
            <div className="flex flex-wrap justify-between">
              <label className="flex w-full xl:w-1/2 p-1 relative">
                <input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Name" type="text" name="name" onChange={this.handleChange} />
                {this.validator.message('name', this.state.name, 'required')}
              </label>
              <label className="flex w-full xl:w-1/2 p-1 relative">
                <input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Email" type="email" name="email" onChange={this.handleChange} />
                {this.validator.message('name', this.state.email, 'required|email')}
              </label>
              <label className="flex w-full xl:w-1/2 p-1 relative">
                <input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Telephone" type="text" name="telephone" onChange={this.handleChange} />
               {this.validator.message('name', this.state.telephone, 'required')}
              </label>
              <span className="w-full xl:w-1/2 p-1">
                <button className="btn w-full btn-yellow text-orange-semidark p-0" type="submit"><span className="whitespace-no-wrap block p-4">Book induction</span></button>
              </span>
            </div>
        </form>
    );
  }
}
