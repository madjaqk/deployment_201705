import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksNewComponent } from './books/books-new/books-new.component';

import { BooksService } from "./books/books.service";
import { BooksDetailComponent } from './books/books-list/books-detail/books-detail.component';
import { FilterPipe } from './books/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    BooksNewComponent,
    BooksDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
