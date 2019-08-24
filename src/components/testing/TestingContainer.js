import { connect } from 'react-redux';
import Testing from './Testing';
import { playSound } from '../../state/actions/soundActions';

const mapStateToProps = (state) => {
    return {
        question: state.testing.exercises[state.testing.exerciseIndex].question,
        isTrueAnswer: state.testing.isTrueAnswer,
        sound: 'sounds/1/1_3.mp3',
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTrueAnswer: (url) => dispatch(playSound(url))
    };
}

const TestingContainer = connect(mapStateToProps, mapDispatchToProps)(Testing);

export default TestingContainer;