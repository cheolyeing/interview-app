import React from "react";

const ShowPeople = ({ people }) => {
  return (
    <div>
      {people.map((current, idx) => (
        <label key={idx}>
          <input type="checkbox"></input>
          {current.name}
          {current.problem.map((p) => (
            <li>{p}</li>
          ))}
          <br />
        </label>
      ))}
    </div>
  );
};

export default ShowPeople;
