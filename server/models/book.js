let mongoose = require("mongoose")

let BookSchema = new mongoose.Schema({
	title: String,
	author: String,
}, {timestamps: true})

mongoose.model("Book", BookSchema)