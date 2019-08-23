import React from 'react';
import { Root, View, Panel, IS_PLATFORM_IOS, PanelHeader, Group, Cell, Separator, ActionSheet, ActionSheetItem } from '@vkontakte/vkui';
import Audition from './Audition';
import LessonManager from './LessonManager';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import connect from '@vkontakte/vkui-connect';
import lessons from './lessonsData';
import { shuffle, getRandomArray } from './tools';
import Material from './Material';

const MENU_TITLE = 'Полиглот Английский';
const LESSONS_GROUP_TITLE = 'Уроки';
const NUM_EXERCISES = 20;

const GROUP_ID = 55119351;

class MainMenu extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeView: 'mainView',
			selectedLesson: 0,
			activeLessonPanel: 'lessonPanel',
			popout: null
		};

		this.onCloseLesson = this.onCloseLesson.bind(this);
		this.openSheet = this.openSheet.bind(this);
	}

	openSheet(event) {
		const lessonIndex = parseInt(event.currentTarget.dataset.lesson, 10);

		this.setState({selectedLesson: lessonIndex,
			popout:
			<ActionSheet
				title={"Урок " + (lessonIndex + 1)}
				text={lessons[lessonIndex].description}
				onClose={() => this.setState({popout: null})}>
					<ActionSheetItem onClick={() => this.startLesson(lessonIndex)}>Тренировка</ActionSheetItem>
					<ActionSheetItem onClick={() => this.startAudition(lessonIndex)}>Аудирование</ActionSheetItem>
					<ActionSheetItem onClick={() => this.startMaterial(lessonIndex)}>Материалы</ActionSheetItem>
					{IS_PLATFORM_IOS && <ActionSheetItem autoclose theme="cancel">Отмена</ActionSheetItem>}
			</ActionSheet>
		});
	}

	startLesson(lessonIndex) {
		this.setState({
			activeView: 'lessonView', 
			selectedLesson: lessonIndex,
			activeLessonPanel: 'lessonPanel',
			popout: null,
		});
	}

	startAudition(lessonIndex) {
		this.setState({
			activeView: 'lessonView', 
			selectedLesson: lessonIndex,
			activeLessonPanel: 'auditionPanel',
			popout: null,
		});
	}

	startMaterial(lessonIndex) {
		this.setState({
			activeView: 'lessonView',
			selectedLesson: lessonIndex,
			activeLessonPanel: 'materialPanel',
			popout: null,
		});
	}

	onCloseLesson() {
		this.setState({activeView: 'mainView'});
		
		//connect.send("VKWebAppJoinGroup", {"group_id": GROUP_ID});
	}


	componentDidMount() {
		connect.subscribe(this.vkHandler);
	}

	componentWillMount() {
		connect.unsubscribe(this.vkHandler);
	}

	vkHandler(e) {
		//console.log(e);
	}

	render() {
		return (
			<Root activeView={this.state.activeView}>
				<View id="mainView" activePanel="mainPanel" popout={this.state.popout}>
					<Panel id="mainPanel">
						<PanelHeader>{MENU_TITLE}</PanelHeader>
						
						<Group title={LESSONS_GROUP_TITLE}>
							{lessons.map((val, i) => {
								return (
									<div key={i}>
										<Cell
											onClick={this.openSheet}
											expandable
											before={i < 3 ? (<Icon24Education />) : (<Icon24Education />)}
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
				<View id="lessonView" activePanel={this.state.activeLessonPanel}>
					<Panel id="lessonPanel">
						<LessonManager 
							exercise={getRandomArray(lessons[this.state.selectedLesson].exercise, NUM_EXERCISES)} 
							onCloseLesson={this.onCloseLesson} 
							lessonTitle={lessons[this.state.selectedLesson].title}
						/>
					</Panel>
					<Panel id="auditionPanel">
						<Audition 
							exercise={getRandomArray(lessons[this.state.selectedLesson].exercise, NUM_EXERCISES)} 
							onCloseLesson={this.onCloseLesson} 
							lessonTitle={lessons[this.state.selectedLesson].title}
						/>
					</Panel>
					<Panel id="materialPanel">
						<Material lessonId={this.state.selectedLesson} 
							onClose={this.onCloseLesson}
						/>
					</Panel>
				</View>
			</Root>
		);
	}
}


export default MainMenu;