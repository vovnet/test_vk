import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { View, Panel, PanelHeader, ModalRoot, ModalCard, Root, Group, List, Cell, Div, Button, HeaderButton, CellButton, Header } from '@vkontakte/vkui';
import Icon20GlobeOutline from '@vkontakte/icons/dist/20/globe_outline';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import InputAnswer from './InputAnswer';
import Variants from './Variants';
import './input_answer.css';
import connect from '@vkontakte/vkui-connect';
import Donater from './Donater';
import Lesson from './Lesson';
import LessonManager from './LessonManager';

const exercise = [
	{
		question: "Я буду гулять завтра.",
		answer: ["I", "will", "walk", "tomorrow"],
		fake: ["he", "did"]
	},
	{
		question: "Он танцевал вчера.",
		answer: ["He", "danced", "yesterday"],
		fake: ["she", "will", "tomorrow"]
	},
];


/*
connect.send('VKWebAppInit', {});
connect.send("VKWebAppGetUserInfo", {});
connect.subscribe(function(e) {
	console.log('data!!!!');
	console.log(e.detail.data.photo_100);
	console.log(e.detail.type);
	console.log(e);
}); 
connect.subscribe((e) => console.log("hello! " + e));
*/
ReactDOM.render(<LessonManager exercise={exercise} />, document.getElementById('root'));

