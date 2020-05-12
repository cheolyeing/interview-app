import React from "react";
import { Link } from "react-router-dom";
import Divided from "./Divided";

const Main = ({
  location: {
    state: { people, problem_num },
  },
}) => {
  return (
    <div>
      <h1>멤버별 문제 할당 결과</h1>
      <Divided people={people} problem_num={problem_num} />
      <Link to="/">
        <h1>돌아가기</h1>
      </Link>
    </div>
  );
};

export default Main;
