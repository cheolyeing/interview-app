import React from "react";

class App extends React.Component {
  state = {
    clicked1: false,
    clicked2: false,
    people_num: 0,
    problem_num: 0,
    people_name: ["권현이", "기연주", "김규빈", "임희철"],
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
    const {
      clicked1,
      clicked2,
      people_num,
      problem_num,
      people_name,
    } = this.state;

    return (
      <section className="container">
        {!clicked1 ? (
          <section>
            <h1>출석 체크</h1>
            {people_name.map((current) => (
              <label>
                <input type="checkbox"></input>
                {current}
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
          <section>
            {!clicked2 ? <div>false</div> : <div>true</div>}
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
