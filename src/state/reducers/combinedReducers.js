import { combineReducers } from "redux";
import SoundReducer from "./SoundReducer";
import TestingReducer from "./TestingReducer";

const combined = combineReducers({
    sound: SoundReducer,
    testing: TestingReducer,
});

export default combined;