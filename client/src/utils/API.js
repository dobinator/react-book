 import axios from 'axios'; 
export default{
getGoogleBooks: function(searchTerm){
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
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