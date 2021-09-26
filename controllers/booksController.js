const Books = require ('../models/books');


module.exports={
findAllBooks: function(req, res){
Books.find(req.searchTerm)
.sort({ date:-1 })
.then(data=>res.json(data))
.catch (err=> res.json(err))
}, 
findOneBook: function(req, res){
    Books.findOne({id: req.params.id})
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
},
saveBook: function(req, res){
    Books.create(req.body)
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
},

deleteBook: function(req, res){
    Books.findById({_id: req.params.id })
    .then(response=> response.remove())
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
}

}; 