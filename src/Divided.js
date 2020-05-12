import React from "react";
import Emoji from "./Emoji";
import ShowPeople from "./ShowPeople";

function div(people, num) {
  console.log("on Function");
  console.log(people);
  var len = people.length;
  var p = 1;
  var max = num / len;
  for (var i = 0; i < max * len; i++) {
    var idx = parseInt(Math.random() * 1000) % len;
    people[idx].problem.push(p++);
  }
}

const Divided = ({ people, problem_num }) => {
  div(people, problem_num);
  console.log(people);
  return (
    <div>
      <h1>
        <Emoji symbol="👨🏻‍💻" />
        멤버 :
        <ShowPeople people={people} />
      </h1>
      <h1>
        <Emoji symbol="😎" />
        인원 수 : {people.length}명
      </h1>
      <h1>
        <Emoji symbol="🧐" />
        문제 수 : {problem_num}문제
      </h1>
    </div>
  );
};

export default Divided;
