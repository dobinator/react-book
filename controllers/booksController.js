const DB = require ('../models');


module.exports={
findAllBooks: function(req, res){
DB.Books.find(req.searchTerm)
.sort({ date:-1 })
.then(data=>res.json(data))
.catch (err=> res.json(err))
}, 
findOneBook: function(req, res){
    DB.Books.findOne({id: req.params.id})
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
},
saveBook: function(req, res){
    DB.Books.create(req.body)
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
},

deleteBook: function(req, res){
    DB.Books.findById({_id: req.params.id })
    .then(response=> response.remove())
    .then(data=>res.json(data))
    .catch (err=> res.json(err))
}

}; 