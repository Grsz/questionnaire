import React, { Component } from 'react';
import './App.css';
import Answers from './Answers';

const questions = {
  questionName: "Select countries",
  questions: [
    [
      {name: "Budapest",
      rightAnswer: false},
      {name: "Hungary",
      rightAnswer: true}
    ],
    [
      {name: "London",
      rightAnswer: false},
      {name: "England",
      rightAnswer: true}
    ]
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...questions,
      conditions: [],
      allTrue: false
    };
  }
  
  questions = questions => 
    questions.map((question, i) => 
      <Answers 
        key={i}
        index={i} 
        answers={question} 
        checkAnswer={this.checkAnswer} 
        toggleable={!this.state.allTrue}
      />
  )
  
  checkAnswer = (index, condition) => {
    const conditions = [...this.state.conditions];
    conditions[index] = condition;
    
    this.setState({
      conditions,
      allTrue: conditions.every(c => c === true)
    })
  }
  render() {
    const { allTrue } = this.state;
    
    return (
      <div className="App">
        <div className={allTrue ? "right" : "wrong"}>
          <h1>{this.state.questionName}</h1>
          {this.questions(this.state.questions)}
          <h2 style={{opacity: allTrue ? 1 : 0}}>
            The answer is correct!
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
