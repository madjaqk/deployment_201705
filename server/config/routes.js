let books = require("./../controllers/books")

module.exports = function(app){
	app.get("/get_books", books.get_books)
	app.post("/create", books.create_book)
}