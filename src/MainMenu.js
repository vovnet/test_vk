import React from 'react';
import { Root, View, Panel, Div, PanelHeader, Group, Cell, Separator } from '@vkontakte/vkui';
import Donater from './Donater';
import LessonManager from './LessonManager';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import lessons from './lessonsData';

const MENU_TITLE = 'Полиглот Английский';
const LESSONS_GROUP_TITLE = 'Уроки';



const exercise = [
	{
		question: "Я буду гулять завтра.",
		answer: ["I", "will", "walk", "tomorrow"],
		fake: ["he", "did"]
	},
	{
		question: "Он танцевал вчера.",
		answer: ["He", "danced", "yesterday"],
		fake: ["she", "will", "tomorrow", 'haha']
	},
];

class MainMenu extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeView: 'mainView',
			selectedLesson: 0
		};

		this.onClickLesson = this.onClickLesson.bind(this);
		this.onCloseLesson = this.onCloseLesson.bind(this);
	}

	onClickLesson(event) {
		const lessonIndex = event.currentTarget.dataset.lesson;
		this.setState({activeView: 'lessonView', selectedLesson: lessonIndex});
	}

	onCloseLesson() {
		this.setState({activeView: 'mainView'});
	}

	render() {
		return (
			<Root activeView={this.state.activeView}>
				<View id="mainView" activePanel="mainPanel">
					<Panel id="mainPanel">
						<PanelHeader>{MENU_TITLE}</PanelHeader>
						<Donater />
						<Group title={LESSONS_GROUP_TITLE}>
							{lessons.map((val, i) => {
								return (
									<div key={i}>
										<Cell
											onClick={this.onClickLesson}
											before={i < 3 ? (<Icon24Education />) : (<Icon24MoneyCircle />)}
											data-lesson={i}
											description={val.description}>
												{val.title}
										</Cell>
										<Separator />
									</div>
								);
							})}
						</Group>
					</Panel>
				</View>
				<View id="lessonView" activePanel="lessonPanel">
					<Panel id="lessonPanel">
						<LessonManager 
							exercise={lessons[this.state.selectedLesson].exercise} 
							onCloseLesson={this.onCloseLesson} 
							lessonTitle={lessons[this.state.selectedLesson].title}
						/>
					</Panel>
				</View>
			</Root>
		);
	}
}

export default MainMenu;