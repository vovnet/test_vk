import React from 'react';
import ReactDOM from 'react-dom';
import './Bar.css';

class Bar extends React.Component {

	render() {
		return (
			<div className="header">{this.props.children}</div>
		);
	}
}

export default Bar;