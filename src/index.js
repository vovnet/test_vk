import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';



function Button(props) {
	return (
		<input className="testBtn" type="button" value={props.value} />
	);
}


function Hello(props) {
	return (
		<div>
			<h2>Hello, {props.name}</h2>
			<User name="Petya" />
			<Button value="Отправка текста" />
			<Button value="I am" />
		</div>
	);
}

const elem = <Hello name="Вася" />;

const test = 'some string...';
ReactDOM.render(elem, document.getElementById('root'));

