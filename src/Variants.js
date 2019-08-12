import React from 'react';
import { Button } from '@vkontakte/vkui';
import './variants.css';

class Variants extends React.Component {

	render() {
		return (
			<div className="grid">
				{ this.props.arr.map( (val) => 
					<Button 
						className="cell" 
						level="outline" 
						onClick={this.props.onClickWord} 
						key={val.text} 
						disabled={val.disabled}
						data-val={val.text}
						stretched>
							{val.text}
					</Button> 
				)}
			</div>
		);
	}
}

export default Variants;