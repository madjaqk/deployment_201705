let mongoose = require("mongoose")
let Book = mongoose.model("Book")

module.exports = {
	get_books: (req, res) => {
		Book.find({})
			.then(books => {res.json(books)})
			.catch(err => {
				console.log("Book find error", err)
				res.status(500).json(err)
			})
	},
	create_book: (req, res) => {
		let new_book = new Book(req.body)
		new_book.save()
			.then(() => {res.json(true)})
			.catch(err => {
				console.log("Book save error", err)
				res.status(500).json(err)
			})
	}
}