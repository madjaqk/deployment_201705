import { Component, OnInit } from '@angular/core';

import { Book } from "./book"

import { BooksService } from "./books.service"

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	all_books: Book[]

  constructor(private books_service: BooksService) { }

  ngOnInit() {
    this.get_all_books()
  }

  get_all_books() { 
    this.books_service.get_all_books()
      .then((data) => { this.all_books = data })
      .catch((err) => { console.log("err", err) })
  }

}
