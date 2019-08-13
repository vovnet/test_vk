import React from 'react';
import { Avatar, Group, Cell, Div } from '@vkontakte/vkui';
import './index.css'

class Donater extends React.Component {
	render() {
		return (
			<Group title="Донатер дня" className="donater">
				<Cell 
					before={<Avatar src="https://sun9-42.userapi.com/c830109/v830109873/b9e84/KVziQV4QJwo.jpg?ava=1" />}
					size="l"
					multiline
					description="10 000 руб."
					bottomContent="Владимир Владимирович">
				</Cell>
			</Group>
		);
	}
}

export default Donater;