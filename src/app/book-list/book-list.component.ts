import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from '../models/book';
import {
  AddBook,
  RemoveBook,
  AddBookFailure,
  AddBookSuccess,
} from '../books/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books$: Observable<Book[]>;
  bookId: string = '';
  bookTitle: string = '';
  bookAuthor: string = '';
  constructor(private store: Store<AppState>) {
    this.books$ = store.pipe(select('book'));
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
    this.bookId = '';
    this.bookTitle = '';
    this.bookAuthor = '';
  }

  removeBook(id: string) {
    this.store.dispatch(RemoveBook({ id }));
  }
}
