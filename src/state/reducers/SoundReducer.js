import { PLAY, STOP } from "../actions/soundActions";

const defaultState = {
    status: 'STOPPED',
    currentSound: null,
};

const SoundReducer = (state = defaultState, action) => {
    switch (action.type) {
        case PLAY:
            return {...state, status: 'PLAYING', currentSound: action.url};
        case STOP:
            return {...state, status: 'STOPPED', currentSound: null};
        default:
            return state;
    }
    return state;
}

export default SoundReducer; 