import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BookService } from './book.service';
import * as bookActions from './book.actions';
import { Book } from '../models/book';

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {}

  //this is an effect that listens for the AddBook action
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      //Listens for the AddBook action
      //Merge map allows multiple concurrent requests 'addBook' actions
      ofType(bookActions.AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          //if the 'addBook' service call is successful, dispatch the AddBookSuccess action
          map((book: Book) => bookActions.AddBookSuccess(book)),
          //if the 'addBook' service call fails, dispatch the AddBookFailure action
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );
}
