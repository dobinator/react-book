const mongoose= require("mongoose");
const db= require("../models");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactBookdb");


const booksData = [
  {
    title: "Little Women",
    synopsis: "Little Women has remained enduringly popular since its publication in 1868, becoming the inspiration for a whole genre of family stories. Set in a small New England community, it tells of the March family: Marmee looks after daughters in the absence of her husband, who is serving as an army chaplain in the Civil War, and Meg, Jo,Beth, and Amy experience domestic trials and triumphs as they attempt to supplement..",
    cover_img_url: "http://books.google.com/books/content?id=v0iuYlsc8EIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Louisa May Alcott",
  },
  {
    title: "Major Pettigrew's Last Stand",
    synopsis: "You are about to travel to Edgecombe St. Mary, a small village in the English countryside filled with rolling hills, thatched cottages, and a cast of characters both hilariously original and as familiar as the members of your own family. Among them is Major Ernest Pettigrew (retired), the unlikely hero of Helen Simonson's wondrous debut.",
    cover_img_url: "http://books.google.com/books/content?id=ql9s8GIj06kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Helen Simonson",
  },

  {
    title: "Tales from Watership Down",
    synopsis:"The sequel to \"Watership Down\" chronicles the lives of the rabbits after their defeat of General Woundwort, from the exploits of El-ahrairah, the mythical rabbit hero, to the adventures of Hazen, Fiver, Bigwig, and their friends.",  
    cover_img_url:"http://books.google.com/books/content?id=XaeFNAu1yvEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author:"Richard Adams",
  },
  {
    title: "Eat, Pray, Love",
    synopsis: "The Number One international bestseller, Eat, Pray Love is a journey around the world, a quest for spiritual enlightenment and a story for anyone who has battled with divorce, depression and heartbreak.",
    cover_img_url: "http://books.google.com/books/content?id=QdCNeNx6LJUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author:"Elizabeth Gilbert",
  },
  {
    title: "The Color Purple",
    synopsis: "Celie has grown up poor in rural Georgia, despised by the society around her and abused by her own family. She strives to protect her sister, Nettie, from a similar fate, and while Nettie escapes to a new life as a missionary in Africa, Celie is left behind without her best friend and confidante, married off to an older suitor, and sentenced to a life alone with a harsh and brutal husband.", 
    cover_img_url: "http://books.google.com/books/content?id=_lzUlQQv3XAC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Alice Walker",
  },
  {
    title:"The Black Echo",
    synopsis: "An LAPD homicide detective must choose between justice and vengeance as he teams up with the FBI in this \"thrilling\" novel filled with mystery and adventure (New York Times Book Review). For maverick LAPD homicide detective Harry Bosch, the body in the drainpipe at Mulholland Dam is more than another anonymous statistic. This one is personal . . . because the murdered man was a fellow Vietnam \"tunnel rat\" who had fought side by side with him in a hellish underground war. Now Bosch is about to relive the horror of Nam.",
    cover_img_url:"http://books.google.com/books/content?id=gClL18CTQWIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    author: "Michael Connelly"
  },
];


// const booksData = async () => {
//   await db.User.deleteMany({})
//     .then(() => db.User.collection.insertMany(booksData))
//     .then((data) => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });
// }


booksData();




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