import { Component, OnInit, Input } from '@angular/core';

import { Book } from "./../book"

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[]
  chosen_book: Book
  search_text: string

  constructor() { }

  ngOnInit() {
    // this.search_text = ""
  }

  choose_book(book: Book){
    if(book == this.chosen_book){
      this.chosen_book = undefined
    } else {
      this.chosen_book = book
    }
  }

}
