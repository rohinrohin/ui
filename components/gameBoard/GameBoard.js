import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Headers from "./Headers";
import request from "./request";
// import data from "../gameBoard/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // windowWidth: window.innerWidth,
      // windowHeight: window.innerHeight,
      data: [],
    };
  }

  handleResize(event) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight / 1.6,
    });
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight / 1.6,
    });
    window.addEventListener("resize", this.handleResize.bind(this));

    let arr = [];
    let interval = setInterval(() => {
      if (this.props.entireData["questions"]) {
        for (const [key, value] of Object.entries(
          this.props.entireData["questions"]
        )) {
          let temp_obj = {};
          temp_obj["category"] = key;
          temp_obj["questions"] = [];
          for (const [key, value_1] of Object.entries(value)) {
            let temp_inside_obj = {};
            temp_inside_obj["points"] = key;
            temp_inside_obj["question"] = value_1["question"];
            temp_inside_obj["answer"] = value_1["answer"];
            temp_inside_obj["options"] = value_1["answers"];
            temp_obj["questions"].push(temp_inside_obj);
          }
          arr.push(temp_obj);
        }
      }

      let rows = 0;
      arr.forEach((category) => {
        if (category.questions.length > rows) {
          rows = category.questions.length;
        }
      });
      this.setState({ rows: 4, cols: 4, data: arr });

      if (this.props.entireData["questions"] && this.state.data != []) {
        clearInterval(interval);
      }
    }, 1000);

    // this.setState({rows: rows, cols: this.state.data.length, data: arr});
  }

  /*
    // Traditional XHR implementation. Getting questions from data.json using XHR. Will run into cross origin issues in some browsers
    // if loading index.html from the local file system (using the file:// protocol) -->
    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        request({url: "data.json"}).then(result => {
            let data = JSON.parse(result),
                rows = 0;
            data.forEach(category => {
                if (category.questions.length > rows) {
                    rows = category.questions.length;
                }
            });
            this.setState({data: data, rows: rows, cols: data.length});
        });
    }
    */

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      cardWidth = this.state.windowWidth / this.state.cols,
      cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
      cards = [];

    this.state.data.forEach((category, categoryIndex) => {
      let left = categoryIndex * cardWidth;
      category.questions.forEach((question, questionIndex) => {
        cards.push(
          <Card
            left={left}
            top={questionIndex * cardHeight + headerHeight}
            height={cardHeight}
            width={cardWidth}
            question={question}
            key={categoryIndex + "-" + questionIndex}
            getChosenQuestion={this.props.getChosenQuestion}
            category={category}
            allData={this.props.entireData}
          />
        );
      });
    });
    return (
      <div className="w-auto h-auto mt-12 flex flex-col">
        <Headers data={this.state.data} headerWidth={cardWidth} />
        {cards}
      </div>
    );
  }
}

export default App;
