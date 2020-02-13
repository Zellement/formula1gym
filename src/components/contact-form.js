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
          name="contact"
          method="post"
          action="/thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" />
              </label>
            </p>

            <label>Your Name <input placeholder="Enter your name" type="text" name="name" onChange={this.handleChange} /></label>   
            <label>Your Email <input placeholder="Enter your email"  type="email" name="email" onChange={this.handleChange} /></label>
            <label>Your Telephone <input placeholder="Enter your telephone" type="text" name="telephone" onChange={this.handleChange} /></label>
            <label>Venue <input placeholder="Enter your venue" type="text" name="venue" onChange={this.handleChange} /></label>
            <label>Date &amp; time requested <input placeholder="Enter your date and time" type="text" name="datetime" onChange={this.handleChange} /></label>
            <label>Details <textarea placeholder="Enter any additional information" rows="5" name="details" onChange={this.handleChange}></textarea></label>
            <button className="btn btn--deep-blue" type="submit">Send booking request</button>
        </form>
    );
  }
}
