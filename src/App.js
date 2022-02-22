import React, { Component } from "react";
import axios from "axios";
import UserCard from "./components/User";
import './App.css'

export default class app extends Component {
  constructor() {
    super();

    this.state = {
      arrayOfUsers: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25").then((res) => {
      console.log(res.data);
      const arrayOfUsers = res.data.results;
      this.setState({ arrayOfUsers });
    });
  }

  render() {
    return (
      <div className="User-container">
        <ul>
          {this.state.arrayOfUsers.map((user, index) => {
            return (
              <UserCard
                key={index}
                firstname={user.name.first}
                lastname={user.name.last}
                gender={user.gender}
                picture={user.picture.thumbnail}
                age={user.dob.age}
                email={user.email}
                city={user.location.city}
                country={user.location.country}
                phone={user.phone}
                nationality={user.nat}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
