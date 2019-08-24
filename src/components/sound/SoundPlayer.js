import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import { stopSound } from '../../state/actions/soundActions';

const Player = (props) => {
    if (props.url === null) return <></>;
    
    return (
        <Sound 
            url={props.url}
            playStatus={props.status}
            onFinishedPlaying={props.onFinishedPlaying}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        url: state.sound.currentSound,
        status: state.sound.status,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFinishedPlaying: () => onFinishedPlaying(dispatch),
    };
}

const SoundPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default SoundPlayer;

const onFinishedPlaying = (dispatch) => {
    dispatch(stopSound());
}