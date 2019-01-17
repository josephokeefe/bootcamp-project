const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(
      substr: String
      hometown: String
      house: String
      concentration: String
    ): [User!]
    post(id: ID!): Post!
    posts: [Post!]
  }

  type Mutation {
    createUser(input: UserInput!): CreateUserReturn!
    createPost(content: String!): CreatePostReturn!
    editPost(id: ID!, newContent: String!): EditPostReturn!
    loginUser(email: String!, password: String!): CreateUserReturn!
  }

  type CreatePostReturn {
    error: Error
    post: Post
  }

  type Error {
    message: String!
  }

  type Post {
    id: ID!
    content: String!
  }

  type EditPostReturn {
    error: Error
    post: Post
  }

  type CreateUserReturn {
    error: Error
    user: User
    token: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
    birthday: String
    concentration: String
    hometown: String
    house: String
    gender: String
    bio: String
    picture: String
    hobbies: [HobbyInput!]
  }

  type Hobby {
    id: ID!
    hobby: String!
  }

  input HobbyInput {
    hpbby: String!
  }
`
