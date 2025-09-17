import { createReducer, on } from '@ngrx/store';
import {
  AddBook,
  RemoveBook,
  AddBookFailure,
  AddBookSuccess,
} from './book.actions';
import { Book } from '../models/book';

const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => {
    return state;
  }),
  on(AddBookSuccess, (state, book) => [...state, book]),
  on(AddBookFailure, (state, { error }) => {
    console.error('Add book failed:', error);
    return state;
  }),

  on(RemoveBook, (state, { id }) => state.filter((book) => book.id !== id))
);
