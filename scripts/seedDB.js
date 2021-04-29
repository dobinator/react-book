const { books } = require("../models");

const booksData = [
  {
    isbn: 9780191605505,
    title: "Little Women",
    description: "Little Women has remained enduringly popular since its publication in 1868, becoming the inspiration for a whole genre of family stories. Set in a small New England community, it tells of the March family: Marmee looks after daughters in the absence of her husband, who is serving as an army chaplain in the Civil War, and Meg, Jo,Beth, and Amy experience domestic trials and triumphs as they attempt to supplement..",
    cover_img_url: "http://books.google.com/books/content?id=v0iuYlsc8EIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Louisa May Alcott",
  },
  {
    isbn: 9781408809327,
    title: "Major Pettigrew's Last Stand",
    description: "You are about to travel to Edgecombe St. Mary, a small village in the English countryside filled with rolling hills, thatched cottages, and a cast of characters both hilariously original and as familiar as the members of your own family. Among them is Major Ernest Pettigrew (retired), the unlikely hero of Helen Simonson's wondrous debut.",
    cover_img_url: "http://books.google.com/books/content?id=ql9s8GIj06kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Helen Simonson",
  },

  {
    isbn: 9780307950192,
    title: "Tales from Watership Down",
    desciption:"The sequel to \"Watership Down\" chronicles the lives of the rabbits after their defeat of General Woundwort, from the exploits of El-ahrairah, the mythical rabbit hero, to the adventures of Hazen, Fiver, Bigwig, and their friends.",  
    cover_img_url:"http://books.google.com/books/content?id=XaeFNAu1yvEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author:"Richard Adams",
  },
  {
    isbn:  9780747585664,
    title: "Eat, Pray, Love",
    description: "The Number One international bestseller, Eat, Pray Love is a journey around the world, a quest for spiritual enlightenment and a story for anyone who has battled with divorce, depression and heartbreak.",
    cover_img_url: "http://books.google.com/books/content?id=QdCNeNx6LJUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author:"Elizabeth Gilbert",
  },
  {
    isbn: 9780156028356,
    title: "The Color Purple",
    description: "Celie has grown up poor in rural Georgia, despised by the society around her and abused by her own family. She strives to protect her sister, Nettie, from a similar fate, and while Nettie escapes to a new life as a missionary in Africa, Celie is left behind without her best friend and confidante, married off to an older suitor, and sentenced to a life alone with a harsh and brutal husband.", 
    cover_img_url: "http://books.google.com/books/content?id=_lzUlQQv3XAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Alice Walker",
  },
  {
    isbn: 9780759525771,
    title:"The Black Echo",
    deacription: "An LAPD homicide detective must choose between justice and vengeance as he teams up with the FBI in this \"thrilling\" novel filled with mystery and adventure (New York Times Book Review). For maverick LAPD homicide detective Harry Bosch, the body in the drainpipe at Mulholland Dam is more than another anonymous statistic. This one is personal . . . because the murdered man was a fellow Vietnam \"tunnel rat\" who had fought side by side with him in a hellish underground war. Now Bosch is about to relive the horror of Nam.",
    cover_img_url:"http://books.google.com/books/content?id=gClL18CTQWIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
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