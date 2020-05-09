import React from "react";

class AddPeople extends React.Component {
    state = {
        people: {
            id: 0,
            name: "임희철",
            problem: [],
            attendance: false,
        },
    };
    pushName = (e) => {
        this.setState({
            people: {
                name: e.target.value,
            },
        });
    };

    render() {
        return (
            <div class="add_name">
                <form class="add_name_form">
                    <input placeholder="이름추가하기" value="" />
                </form>
                <div>{this.state.people}</div>
            </div>
        );
    }
}

export default AddPeople;
