import { connect } from 'react-redux';
import TestingInput from './TestingInput';

const mapStateToProps = (state) => {
    return {
        text: state.testing.input.join(' ').toUpperCase(),
        hasErrors: state.testing.hasErrors,
    };
}

const TestInputContainer = connect(mapStateToProps)(TestingInput);

export default TestInputContainer;