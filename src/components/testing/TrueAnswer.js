import React from 'react';
import PlayButtonContainer from '../sound/PlayButtonContainer';
import SoundPlayer from '../sound/SoundPlayer';

const TrueAnswer = (props) => {
    return (
        <>
            <SoundPlayer />
            <PlayButtonContainer />
        </>
    );
}

export default TrueAnswer;