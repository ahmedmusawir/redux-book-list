import { combineReducers } from 'redux';
import BooksReducer from './reducerBooks';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  // following Keys reflect in Global State
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
