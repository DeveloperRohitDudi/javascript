const books = [
    {
        name: "book one", genre: "science", publish: 1995, edition: 2005, author: "james"
    },
    {
        name: "book two", genre: "fiction", publish: 1990, edition: 2015, author: "cillian"
    },
    {
        name: "book three", genre: "History", publish: 2003, edition: 2018, author: "plato"
    },
    {
        name: "book four", genre: "fiction", publish: 2007, edition: 2014, author: "james"
    },
    {
        name: "book five", genre: "science", publish: 2024, edition: 2024, author: "albert"
    }
];

const myBooks = books.filter((book) => (book.genre == 'science' && book.publish >= 2000));
console.log(myBooks);

