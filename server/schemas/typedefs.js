const { gql } = require('apollo-server-express');

const typedefs = gql`
type User{
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: string
}

input BookInput{
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: string
}

type Auth{
    token: ID
    user: User
}

type Query{
    me: User
}

type Mutation{
    login(email: String, password: String): Auth
    addUse(username: String, email: String, password: String): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID): User
}
`
module.exports = typedefs