import React from 'react';
import { Group, Div, Panel, PanelHeader, Progress } from '@vkontakte/vkui';
import InputAnswer from './InputAnswer';
import Variants from './Variants';

class Lesson extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input: [],
			buttons: this.shuffle(this.generateButtons()),
			error: false,
			formattedAnswer: ''
		};

		this.onClickWord = this.onClickWord.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	generateButtons() {
		const preparedAnswer = this.prepareData(this.props.exercise.answer);
		const preparedFake = this.prepareData(this.props.exercise.fake);
		return preparedAnswer.concat(preparedFake);
	}

	shuffle(arr) {
		return arr.sort(function(){
			return Math.random() - 0.5;
		});
	}

	prepareData(data) {
		return data.map((val) => {
			return { text: val };
		});
	}

	onDelete() {
		let word = this.state.input.pop();
		this.setState(this.state.input);
		this.changeDisabledButton(word);
		this.formatAnswer();
	}

	onClickWord(event) {
		let word = event.currentTarget.dataset.val;
		this.changeDisabledButton(word);
		this.state.input.push(word);
		this.setState(this.state.input);
		this.formatAnswer();
		if (this.compareResults()) this.props.onComplete();
	}

	changeDisabledButton(word) {
		this.state.buttons.map( (val) => {
			if (val.text === word) {
				val.disabled = !val.disabled;
			}
			return val;
		});
	}

	formatAnswer() {
		let filter = this.state.input.filter((val, i) => {
			if (this.props.exercise.answer[i] !== val) {
				return 1;
			}
		});

		this.setState({ 
			formattedAnswer: this.state.input.join(' '), 
			error: filter.length > 0
		});
	}

	compareResults() {
		return JSON.stringify(this.state.input) === JSON.stringify(this.props.exercise.answer);
	}

	render() {
		return (
			<Div>
				<Group>
					<Div>
						<Progress value={this.props.progressValue} />
						<p className="question">{this.props.exercise.question}</p>
					</Div>
				</Group>
				<Group>
					<Div>
					<InputAnswer 
						text={this.state.formattedAnswer} 
						onDelete={this.onDelete}
						statusError={this.state.error}
						disabled={this.state.input.length <= 0} />
					</Div>
				</Group>
				<Group>
					<PanelHeader>Первый урок</PanelHeader>
					<Div>
						<Variants arr={this.state.buttons} onClickWord={this.onClickWord} />
					</Div>
				</Group>
			</Div>		
		);
	}
}

export default Lesson;