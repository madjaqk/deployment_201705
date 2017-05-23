import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from "./../book"

import { BooksService } from "./../books.service"

@Component({
  selector: 'app-books-new',
  templateUrl: './books-new.component.html',
  styleUrls: ['./books-new.component.css']
})
export class BooksNewComponent implements OnInit {
  new_book: Book = new Book

  @Output() refresh = new EventEmitter

  constructor(private books_service: BooksService) { }

  ngOnInit() {
  }

  create(){
    this.books_service.create_book(this.new_book)
      .then(() => {
        this.new_book = new Book
        this.refresh.emit()
      })
      .catch((err) => console.log(err))
  }

}
