import React from 'react'
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
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
  };

  render() {
    return (
        <form
          className="form"
          name="quick-contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                Don't fill this out:{" "}
                <label><input name="bot-field" /></label>
            </p>
            <div className="flex flex-wrap justify-between">
              <label className="flex flex-1 m-1"><input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Name" type="text" name="name" onChange={this.handleChange} /></label>
              <label className="flex flex-1 m-1"><input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Email"  type="email" name="email" onChange={this.handleChange} /></label>
              <label className="flex flex-1 m-1"><input className="bg-gray-300 flex-grow p-4 rounded-full" placeholder="Telephone" type="text" name="telephone" onChange={this.handleChange} /></label>
              <button className="btn btn-orange p-0 flex-1 m-1" type="submit"><span className="whitespace-no-wrap block p-4">Book induction</span></button>
            </div>
        </form>
    );
  }
}
