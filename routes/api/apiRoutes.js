const router = require('express').Router();
const booksController = require('../../controllers/booksController'); 


router.route('/')
.get(booksController.findAllBooks)
.post(booksController.saveBook)

router.route('/:id')
.get(booksController.findOneBook)
.delete(booksController.deleteBook)


module.exports = router;