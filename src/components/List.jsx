import React, { Component } from "react";
import { ContactPhone, DeleteForever } from "@material-ui/icons";
import "./list.css";
import UserConsumer from "../context";
// import PropTypes from "prop-types";
export default class List extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          console.log(value);
          return (
            <div className="list mt-3 w-100">
              <input
                name="filter"
                id="filter"
                className="form-control"
                placeholder="Search"
                value={value.filter}
                onChange={value.searchHandler}
              />
              <ul className="list-group my-3 ulList">
                {value.contacts
                  .filter(
                    (i) =>
                      i.name
                        .toLowerCase()
                        .includes(value.filter.toLowerCase()) ||
                      i.phone.includes(value.filter)
                  )
                  .map((item, index) => (
                    <li
                      key={index}
                      className={`list-group-item d-flex justify-content-between listLi ${
                        index % 2 === 0 ? value.color1 : value.color2
                      }`}
                    >
                      <span className="d-flex align-items-center justify-content-center">
                        <ContactPhone style={{ color: "black" }} />
                        <span className="name ms-2">{item.name}</span>
                      </span>
                      <span className="list-span">
                        <span className="phone">
                          <span >
                            {value.calling +
                              " " +
                              item.phone
                                .replace(/\D/g, "")
                                .replace(
                                  /(\d{3})(\d{3})(\d{2})(\d{2})/,
                                  "($1) $2 $3 $4"
                                )}
                          </span>
                          {/* <Phone style={{ color: "blue" }} /> */}
                        </span>
                        <span
                          onClick={() => value.deleteContact(item.phone)}
                          className="delete-button"
                        >
                          <DeleteForever style={{ color: "red" }} />
                        </span>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
