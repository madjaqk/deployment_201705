import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"

import { Book } from "./book"

import "rxjs"

const HEADERS = new Headers({ "Content-Type": "application/json"})
const OPTIONS = new RequestOptions({ headers: HEADERS })

@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  get_all_books(){
  	return this.http.get("/get_books")
  			.map(data => data.json())
  			.toPromise()
  }

  create_book(book: Book){
  	return this.http.post("/create", book, OPTIONS)
  			.toPromise()
  }

}
