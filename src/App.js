import React from "react";

class App extends React.Component {
  state = {
    clicked1: false,
    clicked2: false,
    people_num: 0,
    problem_num: 0,
    people: [
      {
        id: 0,
        name: "임희철",
        attendance: false,
      },
      {
        id: 1,
        name: "서성준",
        attendance: false,
      },
      {
        id: 2,
        name: "Nicolas",
        attendance: false,
      },
    ],
  };

  setPeopleNum = (e) => {
    this.setState({
      people_num: e.target.value,
    });
  };

  setProblemNum = (e) => {
    this.setState({
      problem_num: e.target.value,
    });
  };

  setAddPeople = () => {
    const { people } = this.state;
    this.setState({
      people: people.concat({ id: this.id++ }),
    });
  };

  setClicked1 = () => {
    this.setState({
      clicked1: true,
    });
  };

  setClicked2 = () => {
    this.setState({
      clicked2: true,
    });
  };

  render() {
    const { clicked1, clicked2, people_num, problem_num, people } = this.state;

    return (
      <section className="container">
        {!clicked1 ? (
          // Page #1
          <section>
            <h1>출석 체크</h1>
            {people.map((current) => (
              <label>
                <input type="checkbox"></input>
                {current.name}
                <br />
              </label>
            ))}

            <h1>문제 수를 입력해주세요.</h1>
            <input placeholder="문제 수" onChange={this.setProblemNum}></input>
            <h1>인원 수 : {people_num}명</h1>
            <h1>문제 수 : {problem_num}문제</h1>
            <button onClick={this.setClicked1}></button>
          </section>
        ) : (
          // Page #2, 3
          <section>
            {!clicked2 ? (
              // Page #2
              <div>false</div>
            ) : (
              // Page #3
              <div>true</div>
            )}
            <h1>인원 수 : {people_num}명</h1>
            <h1>문제 수 : {problem_num}문제</h1>
            <button onClick={this.setClicked2}></button>
          </section>
        )}
      </section>
    );
  }
}

export default App;
