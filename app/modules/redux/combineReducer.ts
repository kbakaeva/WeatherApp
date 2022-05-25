import { combineReducers } from 'redux';
import { IRootState } from '../../interfaces/IRootState';
import { Weather } from './weather/reducer';

const combineReducer = combineReducers<IRootState>({
    Weather,
});

export default combineReducer;