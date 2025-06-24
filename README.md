
# PLP Bookstore MongoDB Project

This project demonstrates basic and advanced usage of MongoDB for managing a bookstore database called plp_bookstore. It includes data insertion, queries, aggregation pipelines, indexing, and performance optimization.

##  Setup Instructions
 Local MongoDB

1. Install MongoDB Community Server
2.Run mongod in terminal to start the server
3.Use mongo shell to interact with the database

## Data Initialization

Create Database and Collection
      js
         use plp_bookstore
         db.createCollection("books")
Insert Sample Books
Run insert_books.js to insert at least 10 books with the following fields:

title (string)

author (string)

genre (string)

published_year (number)

price (number)

in_stock (boolean)

pages (number)

publisher (string)

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Notes
Use MongoDB Compass or VS Code MongoDB plugin for easier exploration

Indexing significantly improves query performance on large collections

Aggregation pipelines are powerful for reporting and analytics


## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 