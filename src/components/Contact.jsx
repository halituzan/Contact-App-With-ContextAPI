import { Component } from "react";
import List from "./List";
import "./contact.css";
import Form from "./Form";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact d-flex flex-column align-items-center my-3 container w-50">
        <h1 className="contactTitle">Contacts</h1>
        <List/>
        <Form/>
      </div>
    );
  }
}
