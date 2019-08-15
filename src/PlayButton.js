import React from 'react';
import { Button } from '@vkontakte/vkui';
import Sound from 'react-sound';
import Icon24Volume from '@vkontakte/icons/dist/24/volume';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: props.status
        };
    }

    render() {
        return(
            <div>
                <Sound 
                    url={this.props.url}
                    playStatus={this.state.status}
                    onFinishedPlaying={ () => {this.setState({status: Sound.status.STOPPED})} }
                />
                <Button 
                    disabled={this.state.status === Sound.status.PLAYING}
                    level="outline"
                    onClick={() => this.setState({status: Sound.status.PLAYING})}
                    before={<Icon24Volume/>}
                    size="l">
                        Прослушать
                </Button>
            </div>
        );
    }
}

export default PlayButton;