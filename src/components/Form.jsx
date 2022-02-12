import React, { Component } from "react";
//import { countries } from "country-data";
import UserConsumer from "../context";
// console.log(countries.all);
export default class Form extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          console.log(value.addCallCode)
          return (
            <div className="forms container p-0">
              <form className="d-flex flex-column">
                <input
                  type="text"
                  name="name"
                  className="form-control my-2"
                  id="name"
                  placeholder="Enter Name"
                  value={value.name}
                  onChange={value.changeValue}
                />

                <div className="input-group mb-3 inputs-groups">
                  <select className="form-control selects" style={{ flex: 2 }}
                  onChange={() =>
                    value.addCallCode(document.querySelector(".selects").value)
                  }
                  >
                    {value.countries.all
                      .filter((i) => i.countryCallingCodes[0])
                      .sort(
                        (a, b) =>
                          a.countryCallingCodes[0] - b.countryCallingCodes[0]
                      )
                      .map((i, index) => {
                        return (
                          <option
                            className="dropdown-item"
                            key={i.alpha2 ? i.alpha2 + index : i.alpha3 + index}
                            value={i.countryCallingCodes[0]}
                            
                          >
                            {i.alpha3}
                            {"(" + i.countryCallingCodes[0] + ")"}
                          </option>
                        );
                      })}
                  </select>
                  <input
                    style={{ flex: 10 }}
                    type="text"
                    name="phone"
                    className="form-control add-inputs"
                    id="phone"
                    placeholder="Enter Number"
                    value={value.phone}
                    onChange={value.changeValue}
                  />
                </div>
                <button
                  type="Submit"
                  className="btn btn-success mt-2"
                  onClick={value.submitHandler}
                >
                  Add
                </button>
              </form>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
