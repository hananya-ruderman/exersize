import { getAllSampleData } from "../data/storage.js";


function createBook(id, title, author, category, year, copies){
    return {
        id,
        title,
        author,
        category,
        year,
        copies
    };
}


export function getBookInfo(book){
    console.log(`the book ${book.title} of ${book.author} has ${book.rating} rating`)
}


console.log(createBook(1, "Harry Potter and the Philosopher's Stone",  "J.K. Rowling", "Fantasy", 1997, 3))

//  {
//     id: 1,
//     title: "Harry Potter and the Philosopher's Stone",
//     author: "J.K. Rowling",
//     category: "Fantasy",
//     year: 1997,
//     totalCopies: 3,
//     availableCopies: 2,
//     timesLoaned: 15,
//     rating: 4.8
//   },