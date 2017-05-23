import { Pipe, PipeTransform } from '@angular/core';

import { Book } from "./book"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(books: Book[], search: string): Book[] {
  	if(!books){ return undefined }
  	if(!search){ return books }

  	search = search.toLowerCase()

  	return books.filter((book) => book.title.toLowerCase().indexOf(search) >= 0 || book.author.toLowerCase().indexOf(search) >= 0)
  }

}
