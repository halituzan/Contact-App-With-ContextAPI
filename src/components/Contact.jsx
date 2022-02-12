import { Component } from "react";
import List from "./List";
import "./contact.css";
import Form from "./Form";
import { Contacts } from "@material-ui/icons";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact d-flex flex-column align-items-center my-3 container w-75 p-5 bg-light  rounded-5">
        <div className="header d-flex justify-content-around align-items-center">
        <Contacts className="me-3" style={{fontSize:"50px",color:"orange"}}/>
        <h1 className="contactTitle" style={{fontSize:"50px"}}>Contacts</h1>
        </div>
        
        <List/>
        <Form/>
      </div>
    );
  }
}
