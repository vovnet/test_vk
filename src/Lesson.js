import React from 'react';
import { Group, Div, Panel, View, Root, PanelHeader, Progress } from '@vkontakte/vkui';
import InputAnswer from './InputAnswer';
import Variants from './Variants';

class Lesson extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			input: [],
			buttons: [
				{text: "I"}, 
				{text: "do"},
				{text: "can"},
				{text: "walk"},
				{text: "will"},
				{text: "me"},
				{text: "call"},
				{text: "us"},
				{text: "tomorrow"},
			],
			error: false
		};

		this.onClickWord = this.onClickWord.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete() {
		let word = this.state.input.pop();
		this.setState(this.state.input);
		this.changeDisabledButton(word);
	}

	onClickWord(event) {
		let word = event.currentTarget.dataset.val;
		this.changeDisabledButton(word);
		this.state.input.push(word);
		this.setState(this.state.input);
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

	getFormatAnswer() {
		let filter = this.state.input.filter((val, i) => {
			if (this.props.exercise.answer[i] !== val) {
				return 1;
			}
		});

		this.state.error = filter.length > 0;
		return this.state.input.join(' ');
	}

	compareResults() {
		return JSON.stringify(this.state.input) === JSON.stringify(this.props.exercise.answer);
	}

	render() {
		return (
			<Root activeView="mainView">
				<View id="mainView" activePanel="lessonPanel">
					<Panel id="lessonPanel">
						<Group>
							<Div>
								<Progress value={this.props.progressValue} />
								<p className="question">{this.props.exercise.question}</p>
							</Div>
						</Group>
						<Group>
							<Div>
							<InputAnswer 
								text={this.getFormatAnswer()} 
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
					</Panel>
				</View>
			</Root>
		);
	}
}

export default Lesson;