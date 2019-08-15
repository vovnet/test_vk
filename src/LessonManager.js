import React from 'react';
import Lesson from './Lesson';
import { View, Panel, ModalRoot, ModalCard, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import './input_answer.css';
import PlayButton from './PlayButton';

class LessonManager extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isCompleteExercise: false,
			isCompleteLesson: false,
			currentLesson: 0,
			activeView: "mainView",
			activeModal: null,
			progress: 0,
			isPlayng: false
		};

		this.numErrors = 0;

		this.onCompleteExercise = this.onCompleteExercise.bind(this);
		this.onNextExcercise = this.onNextExcercise.bind(this);
		this.onCloseCompleteModal = this.onCloseCompleteModal.bind(this);
		this.onErrorInput = this.onErrorInput.bind(this);
	}

	onCloseCompleteModal() {
		this.props.onCloseLesson();
	}

	onCompleteExercise() {
		this.setState({activeModal: "resultModal", progress: this.calculateProgress()});
	}

	onErrorInput() {
		this.numErrors++;
	}

	completeLesson() {
		this.setState({activeModal: 'completeModal'});
	}

	calculateProgress() {
		return (this.state.currentLesson + 1) / this.props.exercise.length * 100;
	}

	onNextExcercise() {
		if (this.state.currentLesson >= this.props.exercise.length-1) {
			this.completeLesson();
		} else {
			const curr = this.state.currentLesson + 1;
			this.setState({activeModal: null, currentLesson: curr, progress: this.calculateProgress()});
		}
	}

	render() {
		const osname = platform();
		const modal = (
			<ModalRoot activeModal={this.state.activeModal}>
				<ModalCard 
					id="resultModal" 
					title="Правильно!" 
					onClose={this.onNextExcercise}
					icon={
						<PlayButton
							url={"sounds/" + this.props.exercise[this.state.currentLesson].sound}
							status="PLAYING"
						/>
					}
					caption={this.props.exercise[this.state.currentLesson].answer.join(' ')}
					actions={[{
						title: 'Далее',
						type: 'primary',
						action: this.onNextExcercise
					}]}>	
				</ModalCard>

				<ModalCard 
					id="completeModal"
					onClose={this.onCloseCompleteModal}
					icon={<Icon56FavoriteOutline />}
					title="Вы полностью прошли данный урок!"
					caption={this.showErrors()}
					actions={[{
						title: 'Завершить',
						type: 'primary',
						action: this.onCloseCompleteModal
					}]}>
				</ModalCard>
			</ModalRoot>
		);

		return (
			<View id="mainView" activePanel="lessonPanel" modal={modal}>
				<Panel id="lessonPanel">
					<PanelHeader 
						left={
							<HeaderButton onClick={this.props.onCloseLesson}>
								{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
							</HeaderButton>
						} > {this.props.lessonTitle}
					</PanelHeader>
					<Lesson 
						exercise={this.props.exercise[this.state.currentLesson]} 
						onComplete={this.onCompleteExercise} 
						progressValue={this.state.progress} 
						onErrorInput={this.onErrorInput}
						key={Math.random()} />
				</Panel>
			</View>
		);
	}

	showErrors() {
		const errorPercent = this.numErrors / this.props.exercise.length * 100;
		let message;
		if (errorPercent === 0) message = 'Тема полностью усвоена!';
		if (errorPercent > 10) message = 'Ваши знания на хорошем уровне!';
		if (errorPercent > 20) message = 'Тема плохо усвоена, нужно больше практики.';
		if (errorPercent > 50) message = 'Тема не усвоена!';
		
		return (
			<div>
				<div>Количество ошибок: {this.numErrors}</div>
				<div className="knowledge">{message}</div>
			</div>
		);
	}
}

export default LessonManager;