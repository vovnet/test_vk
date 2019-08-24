import { CLICK_ON_VARIANT, ADD_VARIANT_TO_INPUT, REMOVE_LAST_INPUT, SET_EXERCISE, CLEAR_INPUT, CHECK_ANSWER, CHECK_HAS_ERRORS } from '../actions/testingActions';

const defaultData = {
    lessonIndex: null,
    exercises: [{question: 'Это тест.', answer: ['This', 'is', 'test']}],
    exerciseIndex: 0,
    isTrueAnswer: false,
    hasErrors: false,
    buttons: [
        {text: 'hello', id: 0, view: 'HELLO'},
        {text: 'this', id: 1, view: 'THIS'},
        {text: 'is', id: 2, view: 'IS'},
        {text: 'test', id: 3, view: 'TEST'},
    ],
    input: [],
};

const TestingReducer = (state = defaultData, action) => {
    switch(action.type) {
        case CLICK_ON_VARIANT:
            return {
                ...state, 
                buttons: state.buttons.map((item, i) => {
                    if (action.id === i) {
                        return {...item, disabled: true};
                    }
                    return item;
                }),
            };

        case ADD_VARIANT_TO_INPUT:
            return {...state, input: [...state.input, action.text], isTrueAnswer: false};

        case REMOVE_LAST_INPUT:
            let last = state.input[state.input.length-1];
            let changed = false;
            let buttons = state.buttons.map((item) => {
                if (!changed && item.text.toLowerCase() === last) {
                    changed = true;
                    return {...item, disabled: false};
                }
                return item;
            });
            let input = state.input.filter((item, i) => {
                if (i < state.input.length-1) {
                    return item;
                }
            });
            return {...state, buttons, input};

        case CHECK_ANSWER:
            let trueAnswer = state.exercises[state.exerciseIndex].answer.join().toLowerCase();
            let userAnswer = state.input.join().toLowerCase();
            if (trueAnswer === userAnswer) {
                return {...state, isTrueAnswer: true};
            }
            return state;

        case CHECK_HAS_ERRORS:
            if (state.input.length > state.exercises[state.exerciseIndex].answer.length) {
                return {...state, hasErrors: true};
            }
            let result = state.input.filter((item, i) => {
                if (item !== state.exercises[state.exerciseIndex].answer[i].toLowerCase()) {
                    return 1;
                }
            });
            return {...state, hasErrors: result.length > 0};

        case CLEAR_INPUT:
            console.log('clear input!');
            return state;

        case SET_EXERCISE:
            if (state.exercises.length < state.exerciseIndex + 1) {
                return {...state, exerciseIndex: state.exerciseIndex + 1};
            }
            return state;

        default: 
            return state;
    }
    return state;
}

export default TestingReducer;