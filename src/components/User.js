import React, { useState } from "react";
import countryCodeToFlag from "tiny-flag";




function UserCard(props) {
  const [isHidden, setHide] = useState(true);
  const flagEmoji = countryCodeToFlag(props.nationality)
  
  function flagURL(code) {
    return `https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/${code}.svg`;
  }

  return (
    <div className="User">
      <li style={{ listStyle: "none" }}>
      <h1>{props.firstname} {props.lastname}</h1>
        <img
          src={props.picture}
        ></img>
        <button onClick={() => {
            isHidden ? setHide(false) : setHide(true);
          }}>Show Details</button>
        {isHidden ? (
          <div></div>
        ) : (
          <div>
            <p>age: {props.age}</p>
            <p>gender: {props.gender}</p>
            <p>location: {props.city}, {props.country} <img src={flagURL(props.nationality)}></img></p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
          </div>
        )}
        </li>
    </div>
  );
}

export default UserCard;
