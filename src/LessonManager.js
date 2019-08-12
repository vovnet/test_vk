import React from 'react';
import Lesson from './Lesson';
import { Root, View, Panel, ModalRoot, ModalCard, PanelHeader, HeaderButton } from '@vkontakte/vkui';
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';

class LessonManager extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isCompleteExercise: false,
			isCompleteLesson: false,
			currentLesson: 0,
			activeView: "mainView",
			activeModal: null,
			progress: 0
		};

		this.onCompleteExercise = this.onCompleteExercise.bind(this);
		this.onNextExcercise = this.onNextExcercise.bind(this);
		this.onCloseCompleteModal = this.onCloseCompleteModal.bind(this);
	}

	onCloseCompleteModal() {
		this.props.onCloseLesson();
	}

	onCompleteExercise() {
		console.log('Complete!');
		this.setState({activeModal: "resultModal", progress: this.calculateProgress()});
	}

	completeLesson() {
		console.log('lesson is complete!');
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
		const modal = (
			<ModalRoot activeModal={this.state.activeModal}>
				<ModalCard 
					id="resultModal" 
					title="Правильно!" 
					onClose={this.onNextExcercise}
					icon={<Icon56FavoriteOutline />}
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
					title="Вы полностью прошли данный урок."
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
								<Icon24Back />
							</HeaderButton>
						} > {this.props.lessonTitle}
					</PanelHeader>
					<Lesson 
						exercise={this.props.exercise[this.state.currentLesson]} 
						onComplete={this.onCompleteExercise} 
						progressValue={this.state.progress} 
						key={Math.random()} />
				</Panel>
			</View>
		);
	}
}

export default LessonManager;