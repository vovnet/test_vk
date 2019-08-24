import { connect } from "react-redux";
import PlayButton from "./PlayButton";
import { playSound, stopSound } from "../../state/actions/soundActions";

const mapStateToProps = (state) => {
    return { 
        url: state.sound.currentSound,
        isDisabled: state.sound.status === 'PLAYING',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => onClick(dispatch),
    };
}

const PlayButtonContainer = connect(mapStateToProps, mapDispatchToProps)(PlayButton);

export default PlayButtonContainer;

const onClick = (dispatch) => {
    dispatch(playSound('sounds/1/1_1.mp3'));
}
