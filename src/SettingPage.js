import React from "react";
import AddPeople from "./AddPeople";
import data from "./Model";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import ShowInfo from "./ShowInfo";
import ShowPeople from "./ShowPeople";

class SettingPage extends React.Component {
    state = {
        problem_num: 0,
        people: data.people,
    };

    setProblemNum = (e) => {
        this.setState({
            problem_num: e.target.value,
        });
    };

    handleAddPeople = (data) => {
        this.setState(({ people }) => ({
            people: [...people, data],
        }));
    };

    render() {
        const { problem_num, people } = this.state;
        return (
            <div className="setting_page">
                <AddPeople
                    onCreate={this.handleAddPeople}
                    nextId={people.length}
                />
                <h1>출석 체크</h1>
                <ShowPeople people={people} />

                <h1>
                    <Emoji symbol="📝" />
                    문제 수를 입력해주세요.
                </h1>
                <input
                    type="number"
                    placeholder="문제 수"
                    value={this.state.problem_num}
                    onChange={this.setProblemNum}
                />
                <ShowInfo people={people} problem_num={problem_num} />
                <Link
                    to={{
                        pathname: "/main",
                        state: { people, problem_num },
                    }}
                >
                    <h1>저장하기</h1>
                </Link>
            </div>
        );
    }
}

export default SettingPage;
