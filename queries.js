//MongoDB Queries

const { use } = require("react");

// 1.Find all books in a specific genre
//use plp_bookstore;
db.books.find({ genre: "Fiction" })

// 2. Find books published after a certain year
db.books.find({ published_year: { $gt: 1960 } })
// 3.Find books by a specific author
db.books.find({ author: "Jane Austen" })
// 4. Update the price of a specific book

db.books.updateOne(
  { title: "1984" },
  { $set: { price: 21.99 } }
)

//5. Delete a book by its title
db.books.deleteOne({ title: "The Great Gatsby" })


//Advanced Queries
//1.Find books that are both in stock and published after 1960
db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 1960 }
  },
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
)

// 2. Sort by price (ascending)
db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 1950 }
  },
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
).sort({ price: 1 })

// 3.Sort by price (descending)

db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 1950 }
  },
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
).sort({ price: -1 })

// 4.Pagination (5 books per page)

db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 1940 }
  },
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
).sort({ price: 1 }).skip(5).limit(5)


//Aggregation Pipeline
// 1.Calculates the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $sort: { averagePrice: -1 }  // Optional: sort by average price descending
  }
])
 // 2.Find the author with the most books

 db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
])

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }  // Optional: sort by decade
  }
])


//TASK 5:INDEXING
// 1. Create an Index on title
db.books.createIndex({ title: 1 })

//2. Create a Compound Index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

//3. Use explain() to Compare Query Performance

db.books.find({ title: "Dune" }).explain("executionStats")
db.books.find({ author: "George Orwell", published_year: 1949 }).explain("executionStats") // compound index query


