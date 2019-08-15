import React from 'react';
import { Cell, Separator } from '@vkontakte/vkui';

class FlashCell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPressed: false,
        };
    }

    render() {
        return (
            <div>
                <Cell
                    className={this.state.isPressed ? "wrongAnswer" : undefined}
                    multiline
                    size="l"
                    onClick={() => {
                            this.setState({isPressed: true});
                            this.props.onClick && this.props.onClick();
                        } }>
                        {this.props.text}
                </Cell>
                <Separator />
            </div>
        );
    }
}

export default FlashCell;