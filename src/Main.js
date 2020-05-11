import React from "react";
import { Link } from "react-router-dom";
import ShowInfo from "./ShowInfo";

function pickProblems(list) {
    let pnum;
    let idx = Math.floor((Math.random() * 100) % list.length);
    pnum = list[idx];
    list.splice(idx, 1);
    return [list, pnum];
}

const Main = ({
    location: {
        state: { people, problem_num },
    },
}) => {
    return (
        <div>
            <h1>멤버별 문제 할당 결과</h1>
            <ShowInfo people={people} problem_num={problem_num} />
            <Link to="/">돌아가기</Link>
        </div>
    );
};

export default Main;
