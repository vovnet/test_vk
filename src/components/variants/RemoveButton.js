import React from 'react';
import { Button } from '@vkontakte/vkui';
import { connect } from 'react-redux';
import { removeLastInputAction, checkAnswerAction, checkHasErrorsAction } from '../../state/actions/testingActions';


const mapStateToProps = (state) => {
    let isVisible = state.testing.input.length > 0;

    return {
        visible: isVisible,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => onClick(dispatch)
    };
}


const RemoveBtn = (props) => {
    if (!props.visible) return <></>; 

    return (
    <>
        <Button className="remove-input" size='l' level="destructive" onClick={props.onClick}>
            Удалить
        </Button>
    </>
    );
}

const RemoveButton = connect(mapStateToProps, mapDispatchToProps)(RemoveBtn);

export default RemoveButton;

const onClick = (dispatch) => {
    dispatch(removeLastInputAction());
    dispatch(checkAnswerAction());
    dispatch(checkHasErrorsAction());
}