import { Injectable, OnInit } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService implements OnInit {
  ngOnInit(): void {}
  constructor() {}

  book: Book[] = [];

  addBook(book: Book): Observable<Book> {
    return of(book);
  }

  removeBook(id: string): Observable<string> {
    this.book = this.book.filter((b) => b.id !== id);
    return of(id);
  }
}
