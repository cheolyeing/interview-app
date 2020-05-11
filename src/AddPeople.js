import React from "react";
import Emoji from "./Emoji";

class AddPeople extends React.Component {
    state = {
        people: {
            id: 0,
            name: "",
            problem: [],
            attendance: false,
        },
    };
    handleChange = (e) => {
        this.setState({
            people: {
                id: this.props.nextId,
                name: e.target.value,
                problem: [],
                attendance: false,
            },
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.people);
        this.setState({ people: { name: "" } });
    };

    render() {
        return (
            <div className="add_name">
                <form className="add_name_form" onSubmit={this.handleSubmit}>
                    <h1>
                        <Emoji symbol="🙋🏻‍♂" />
                        이름추가하기
                    </h1>
                    <input
                        type="text"
                        placeholder="홍길동"
                        value={this.state.people.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <br />
                    <input type="submit" value="추가하기✅" />
                </form>
            </div>
        );
    }
}

export default AddPeople;
