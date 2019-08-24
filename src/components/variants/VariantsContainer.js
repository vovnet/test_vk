import  { connect } from 'react-redux';
import Variants from './Variants';
import { clickOnVariantAction, addVariantToInputAction, checkAnswerAction, checkHasErrorsAction } from '../../state/actions/testingActions';


const mapStateToProps = (state) => {
    return {
        variants: state.testing.buttons,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (e) => onClick(e, dispatch),
    };
}

const VariantsContainer = connect(mapStateToProps, mapDispatchToProps)(Variants);

export default VariantsContainer;

const onClick = (e, dispatch) => {
    dispatchClick(e.currentTarget.dataset, dispatch);
    dispatchAddInput(e.currentTarget.dataset, dispatch);
    dispatch(checkAnswerAction());
    dispatch(checkHasErrorsAction());
}

const dispatchClick = (dataset, dispatch) => {
    const action = clickOnVariantAction(dataset.text, parseInt(dataset.id));
    dispatch(action);
}

const dispatchAddInput = (dataset, dispatch) => {
    const addInputAction = addVariantToInputAction(dataset.text.toLowerCase());
    dispatch(addInputAction);
}