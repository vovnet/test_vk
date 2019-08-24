export const CLICK_ON_VARIANT = 'CLICK_ON_VARIANT';
export const ADD_VARIANT_TO_INPUT = 'ADD_VARIANT_TO_INPUT';
export const REMOVE_LAST_INPUT = 'REMOVE_LAST_INPUT';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const SET_EXERCISE = 'SET_EXERCISE';
export const CHECK_ANSWER = 'CHECK_ANSWER';
export const CHECK_HAS_ERRORS = 'CHECK_HAS_ERRORS';

export const clickOnVariantAction = (text, id) => {
    return {
        type: CLICK_ON_VARIANT,
        text: text,
        id: id,
    };
}

export const addVariantToInputAction = (text) => {
    return {
        type: ADD_VARIANT_TO_INPUT,
        text: text,
    };
}

export const removeLastInputAction = () => {
    return {
        type: REMOVE_LAST_INPUT,
    };
}

export const clearInputAction = () => {
    return {
        type: CLEAR_INPUT,
    };
}

export const setExerciseAction = () => {
    return {
        type: SET_EXERCISE,
    }
}

export const checkAnswerAction = () => {
    return {
        type: CHECK_ANSWER,
    }
}

export const checkHasErrorsAction = () => {
    return {
        type: CHECK_HAS_ERRORS,
    }
}