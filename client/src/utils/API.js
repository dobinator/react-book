import axios from 'axios'; 

const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`

export default{
getGoogleBooks: function(searchTerm){
    return axios.get(url)
},
getAllBooks: function(){
    return axios.get('/api/books')
},
getOneBook: function(id){
    return axios.get('/api/books/'+id)
},
deleteBook: function(id){
    return axios.delete('/api/books/'+id)
},
saveBook: function(data){
    return axios.post('/api/books/', data)
},

}