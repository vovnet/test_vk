import React from 'react';
import { Button } from '@vkontakte/vkui';
import './variants.css';


const Variants = (props) => {
	return (
		<div className="grid">
			{ props.variants.map( (val) => 
				<Button 
					className="cell" 
					level="outline" 
					onClick={props.onClick} 
					key={val.text} 
					disabled={val.disabled}
					data-text={val.text}
					data-id={val.id}
					stretched>
						{val.view}
				</Button> 
			)}
		</div>
	);
}


export default Variants;