import React from "react";
import ListItem from "../ListItem";

function SearchResult(props) {
  console.log("props: ", props);
  return (
    <div>
      {props.booksState.map((book) => (
        <ListItem
          key={book.id}
          id={book.id}
          title={book.volumeInfo.title}
          authors={
            book.volumeInfo.authors && book.volumeInfo.authors.length > 1
              ? book.volumeInfo.authors.join(", ")
              : book.volumeInfo.authors
          }
          link={book.volumeInfo.previewLink}
          image={(
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : null
          )
          }
          description={book.volumeInfo.description}
          saveBook={props.saveBook}
        />
      ))}
     
    </div>
  );
}
export default SearchResult;
