import React from 'react';
import { Group, Div, Progress } from '@vkontakte/vkui';
import InputAnswer from './InputAnswer';
import Variants from './Variants';
import { shuffle, toUppercaseFirstLetter } from './tools';

class Lesson extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input: [],
			buttons: shuffle(this.generateButtons()),
			error: false,
			formattedAnswer: ''
		};

		// Хранит id в очереди из нажатых кнопок. Используется для последовательной отмены ввода. 
		this.history = [];

		this.onClickWord = this.onClickWord.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	generateButtons() {
		const result = this.props.exercise.answer.concat(this.props.exercise.fake);
		
		return this.prepareData(result);
	}

	
	prepareData(data) {
		return data.map((val, i) => {
			return { text: val, view: val.toUpperCase(), id: i };
		});
	}

	onDelete() {
		this.state.input.pop();
		let id = this.history.pop();
		this.setState(this.state.input);
		this.changeDisabledButtons(id);
		this.formatAnswer();
	}

	onClickWord(event) {
		let word = event.currentTarget.dataset.val;
		let id = event.currentTarget.dataset.id;
		this.history.push(id);
		this.setState({buttons: this.changeDisabledButtons(id)});
		this.state.input.push(word);
		this.setState(this.state.input);
		this.formatAnswer();
		if (this.compareResults()) this.props.onComplete();
		if (this.isErrorInput()) this.props.onErrorInput();
	}

	changeDisabledButtons(id) {
		return this.state.buttons.map( (val) => {
			if (val.id == id) {
				val.disabled = !val.disabled;
			}
			return val;
		});
	}

	isErrorInput() {
		return this.state.input.filter((val, i) => {
			if (this.props.exercise.answer[i].toLowerCase() !== val.toLowerCase()) {
				return 1;
			}
			return 0;
		}).length > 0;
	}

	formatAnswer() {
		this.setState({ 
			formattedAnswer: toUppercaseFirstLetter(this.state.input.join(' ')), 
			error: this.isErrorInput() > 0
		});
	}

	compareResults() {
		return JSON.stringify(this.state.input).toLowerCase() === JSON.stringify(this.props.exercise.answer).toLowerCase();
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
					<Div>
						<Variants arr={this.state.buttons} onClickWord={this.onClickWord} />
					</Div>
				</Group>
			</Div>		
		);
	}
}

export default Lesson;