import React from "react";
// import * as audio from './audio';
import Config from "../../config";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "points", completed: false, answer: null, isAnswerSelected: false };
  }

  clickHandler(event) {
    if (this.state.view === "points") {
      // audio.play("flip");
      setTimeout(() => {
        if (this.state.view === "question") {
          // audio.play("countdown");
        }
      }, 1800);
      this.setState({ view: "question", flipping: true });
    } else if (this.state.view === "question") {
      // audio.stop("countdown");
      this.setState({ view: "points", completed: true, flipping: true });
    } else {
      // audio.play("flipBack");
      this.setState({ view: "points", completed: true, flipping: true });
    }
  }

  componentDidUpdate() {
    // console.log(this.props.allData.current_question != null);
    // console.log(
    //   this.props.allData.current_question.category == this.props.category &&
    //     this.props.allData.current_question.points == this.props.question.points
    // );
    if (this.props.allData.current_question != null) {
      // console.log(this.props.allData.current_question.category)
      // console.log(this.props.category.category)
      if (
        this.props.allData.current_question.category ==
          this.props.category.category &&
        this.props.allData.current_question.points == this.props.question.points
      ) {
        if (this.state.view != "question") {
          this.setState({ view: "question", flipping: true });
        }
      }
    } else {
      if (this.state.view == "question") {
        this.setState({ view: "points", flipping: true });
      }
    }
  }

  getLabelBack() {
    // return this.state.view === "question" ? <>Question</> : <>Answer</>;

    return {
      __html: this.state.view === "question" ? <>Question</> : <>Answer</>,
    };

    // return {
    //   __html:
    //     this.state.view === "question"
    //       ? this.getQuestion()// this.props.question.question
    //       : this.props.question.answer,
    // };
  }

  getAnswer() {
    return this.props.question.options[this.props.question.answer];
  }

  handleClick() {
    this.props.getChosenQuestion(
      this.props.category["category"],
      this.props.question.points
    );
    }

  handleAnswer(answer) {
    this.setState({answer: answer});
    if(answer != null){
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answer: answer,
          game_id: this.props.allData["_id"]["$oid"],
          username: localStorage.getItem("username"),
        }),
      };
      fetch(Config["BACKEND_URL"] + "/question/answer", requestOptions).then(
        (response) => {
          if (response.status != 200) {
            console.log("Error! Please contact the Admin.");
          }
        }
      );
    }
  }

  getQuestion() {
    return (
      <div>
        <div>{this.props.question.question}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <fieldset> */}
          {this.props.question.options.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="jehoot"
                  value={item}
                  onChange={() => this.handleAnswer(index)}
                  disabled={this.state.isAnswerSelected}
                  style={{
                    font: "inherit",
                    color: "#009CDF",
                    width: "20px",
                    height: "20px",
                    border: "0.15em solid currentColor",
                    borderRadius: "50%",
                    marginRight: "5px"
                  }}
                />
                {item}
              </label>
            );
          })}
          {/* </fieldset> */}
        </div>
      </div>
    );
  }

  transitionEndHandler(event) {
    if (event.propertyName === "width") {
      this.setState({ flipping: false });
    }
  }

  render() {
    let style = {
        cursor: "pointer",
        width: this.props.width + "px",
        height: this.props.height + "px",
        transform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)",
        WebkitTransform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)",
      },
      front = this.state.completed ? (
        <img src="./react.svg" />
      ) : (
        <span className="points">{this.props.question.points}</span>
      ),
      className = "flipper";

    if (this.state.view !== "points") {
      className = className + " flipped";
    }
    if (this.state.flipping) {
      className = className + " flipping";
    }
    return (
      <div
        style={style}
        className={className}
        onClick={this.handleClick.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className="card">
          <div className="front">{front}</div>
          <div className="back">
            {/* <span
              dangerouslySetInnerHTML={
                this.state.view === "question" ? "Question" : "Answer"
              }
            /> */}
            <div>
              {this.state.view === "question"
                ? this.getQuestion()
                : this.getAnswer()}
            </div>
            <img src="./react.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
