const { books } = require("../models");

const booksData = [
  {
    isbn: 9780345339683,
    title: "The Hobbit, Or There and Back Again",
    description:' "In a hole in the ground, there lived a hobbit." So begins one of the most beloved and delightful tales in the English language. Set in the imaginary world of Middle-earth, at once a classic myth and a modern fairy tale, The Hobbit is one of literature',
    cover_img_url: "http://books.google.com/books/content?id=hFfhrCWiLSMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "John Ronald Reuel Tolkien",
  },
  {
    isbn: 9781408809327,
    title: "Major Pettigrew's Last Stand",
    description: "You are about to travel to Edgecombe St. Mary, a small village in the English countryside filled with rolling hills, thatched cottages, and a cast of characters both hilariously original and as familiar as the members of your own family. Among them is Major Ernest Pettigrew (retired), the unlikely hero of Helen Simonson's wondrous debut.",
    cover_img_url: "http://books.google.com/books/content?id=ql9s8GIj06kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Helen Simonson",
  },

  {
    isbn: 9781571317322,
    title: "The Seed Keeper",
    desciption: "Rosalie Iron Wing has grown up in the woods with her father, Ray, a former science teacher who tells her stories of plants, of the stars, of the origins of the Dakhóta people. Until, one morning, Ray doesn’t return from checking his traps. ", 
    cover_img_url:"http://books.google.com/books/content?id=XVElEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Diane Wilson",
  },
  {
    isbn: 9780812996715,
    title: "Miss Benson's Beetle",
    description: "It is 1950. London is still reeling from World War II, and Margery Benson, a schoolteacher and spinster, is trying to get through life, surviving on scraps. One day, she reaches her breaking point, abandoning her job and small existence to set out on an expedition to the other side of the world in search of her childhood obsession: an insect that may or may not exist—the golden beetle of New Caledonia.", 
    cover_img_url: "http://books.google.com/books/content?id=qLrWDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Rachel Joyce",
  },
  {
    isbn: 9780156028356,
    title: "The Color Purple",
    description: "Celie has grown up poor in rural Georgia, despised by the society around her and abused by her own family. She strives to protect her sister, Nettie, from a similar fate, and while Nettie escapes to a new life as a missionary in Africa, Celie is left behind without her best friend and confidante, married off to an older suitor, and sentenced to a life alone with a harsh and brutal husband.", 
    cover_img_url: "http://books.google.com/books/content?id=_lzUlQQv3XAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Alice Walker",
  },
  {
    isbn: 9780316498029,
    title:"The Law of Innocence",
    deacription: "On the night he celebrates a big win, defense attorney Mickey Haller is pulled over by police, who find the body of a former client in the trunk of his Lincoln. Haller is immediately charged with murder but can’t post the exorbitant $5 million bail slapped on him by a vindictive judge.", 
    cover_img_url:"http://books.google.com/books/content?id=bGXSDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Michael Connelly"
  },
];

const seedBook = () => books.bulkCreate(booksData);

module.exports = seedBook














//   db.Recipe.remove({})
//   .then(() => db.Recipe.collection.insertMany(recipeSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });