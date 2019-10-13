import { combineReducers } from 'redux';
import seoReducer from './seoReducer.js';

export default combineReducers({
	seo:seoReducer
})