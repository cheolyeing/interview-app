import React from "react";

class AddPeople extends React.Component {
    state = {
        people: {
            id: 0,
            name: "",
            problem: [],
            attendance: false,
        },
    };
    pushName = (e) => {
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
            <div class="add_name">
                <form class="add_name_form" onSubmit={this.handleSubmit}>
                    <input
                        placeholder="이름추가하기"
                        value={this.state.people.name}
                        onChange={this.pushName}
                        name="name"
                    />
                </form>
                <div>{this.state.people.name}</div>
            </div>
        );
    }
}

export default AddPeople;
