import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@vkontakte/vkui/dist/vkui.css';
import connect from '@vkontakte/vkui-connect';
import MainMenu from './MainMenu';




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
//ReactDOM.render(<LessonManager exercise={exercise} />, document.getElementById('root'));
ReactDOM.render(<MainMenu />, document.getElementById('root'));
