import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <form className="contactForm grey darken-3">
          <h4 className="center pink-text text-accent-2 quoteText">
            Get a free quote for your project today!
          </h4>
          <div class="input-field col s12">
            <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" class="validate" required />
            <label for="icon_prefix">Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">event_seat</i>
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Company Name</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input id="icon_prefix" type="email" class="validate" required />
            <label for="icon_prefix">Email</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" class="validate" />
            <label for="icon_telephone">Telephone</label>
          </div>
          <div class="input-field col s12">
            <i class="material-icons prefix">message</i>
            <textarea id="icon_prefix" class="materialize-textarea" />
            <label for="icon_prefix">What services can we help you with?</label>
          </div>
          <button type="submit" className="btn bttn teal fitContent">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
