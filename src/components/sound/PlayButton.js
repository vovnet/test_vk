import React from 'react';
import { Button } from '@vkontakte/vkui';
import Sound from 'react-sound';
import Icon24Volume from '@vkontakte/icons/dist/24/volume';


const PlayButton = (props) => {
    return(
        <div>
            <Button 
                disabled={props.isDisabled}
                level="outline"
                onClick={props.onClick}
                before={<Icon24Volume/>}
                size="l">
                    Прослушать
            </Button>
        </div>
    );
}


export default PlayButton;