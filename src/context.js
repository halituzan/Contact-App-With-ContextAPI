import React, { Component } from "react";
import Country,{ countries } from "country-data";
console.log(Country)
const UserContext = React.createContext();
// Provider, Consumer
export class UserProvider extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
    filter: "",
    color1: "color-1",
    color2: "color-2",
    color:"text-white",
    countries: countries,
    calling: "",
    searchHandler: (e) => {
      return this.setState({ [e.target.name]: e.target.value });
    },
    changeValue: (e) => {
      return this.setState({ [e.target.name]: e.target.value });
    },
    deleteContact: (phone) => {
      const newList = this.state.contacts.filter((i) => i.phone !== phone);
      return this.setState({ contacts: newList });
      
    },
    formSetState: (contactData) => {
      this.state.contacts.push(contactData);
      return this.setState(this.state.contacts);
    },
    submitHandler: (e) => {
      e.preventDefault();
      if (this.state.name !== "" && this.state.phone !== "") {
         this.state.formSetState({ ...this.state });
         return this.setState({ name: "", phone: "" });
      }
    },
    addCallCode: (call) => {
      console.log(call)
      return this.setState({calling:call});
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
