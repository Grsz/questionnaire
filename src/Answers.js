import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

class Answers extends Component {
    constructor(props) {
      super(props);
      this.state = { target: 0 };
    }

    sendAnswerToApp = i => {
        const { checkAnswer, index, answers } = this.props;
        checkAnswer(index, answers[i].rightAnswer);
    }

    componentDidMount(){
        this.sendAnswerToApp(0)
    }

    checkTarget = i => {
        this.sendAnswerToApp(i)
        this.setState({target: i});
    }

    answers = () => 
        this.props.answers.map((answer, i) => 
            <Answer
                clicked={this.checkTarget}
                target={this.state.target === i}
                key={i}
                index={i}
                name={answer.name}
                toggleable={this.props.toggleable}
            />
        )

    render() {
        return (
            <div className="Answers">
                {this.answers()}
            </div>
        );
    }
}

Answers.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        rightAnswer: PropTypes.bool.isRequired,
    })).isRequired,
}

export default Answers;