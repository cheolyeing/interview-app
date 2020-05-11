import React from "react";
import Emoji from "./Emoji";
import ShowPeople from "./ShowPeople";

const ShowInfo = ({ people, problem_num }) => {
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

export default ShowInfo;
