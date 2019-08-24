import { createStore } from "redux";
import SoundReducer from "./reducers/SoundReducer";
import combined from "./reducers/combinedReducers";

export const store = createStore(combined);