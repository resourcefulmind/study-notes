# What is GraphQL?

- It is an API standard that provides a more efficient, powerful and flexible alternative to REST. Developed and open-sourced by Facebook. It enables declarative data fetching at its core.

## How do you explain declarative data fetching?

- It is a situation where a client can specify exactly what data it needs from an API.

### Brief summary of REST so we can appreciate GraphQL's improvement?

Usually, apps want to be able to fetch information that's stored remotely in a database that can be accessed over the internet. The client side will send a request to a server which then retrieves what is needed from the database and sends a response back to the client.

REST was one of the popular ways to expose data from a server. When it was developed, apps were small, simple and the development speed wasn't needed to be very fast.

### What were the 3 major factors that led to the development and design for alternatives to REST?

1. Increased mobile usage, low power devices and sloppy networks. GraphQL minimizes the amount of data that needs to be transferred over the network.

2. With GraphQL, different frontend frameworks can access precisely the data they need. This used to be very cumbersome for REST to do.

3. GraphQL makes continuous deployment faster as it eliminates modifications on specific design and requirements on the client side as that would hinder fast dev practices and iterations.

### Is GraphQL only for React Developers?

No, Facebook started using it in 2012 for their mobile apps. It can be used with any programming language and framework. Literally everywhere where a company communicates with an API.

### Why is GraphQL a better alternative to REST APIs

1. You do not need to call multiple endpoints to obtain data, a single call can provide all the data you need.

2. It solves the problem of overfetching and underfetching.

- Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.

- Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything they need. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.
As an example, consider the same app would also need to display the last three followers per user. The API provides the additional endpoint /users/<user-id>/followers. In order to be able to display the required information, the app will have to make one request to the /users endpoint and then hit the /users/<user-id>/followers endpoint for each user

3. Rapid Product Iterations on the Frontend

- With every change that is made to the UI, there is a high risk that now there is more (or less) data required than before. Consequently, the backend needs to be adjusted as well to account for the new data needs. This kills productivity and notably slows down the ability to incorporate user feedback into a product.
With GraphQL, this problem is solved. Thanks to the flexible nature of GraphQL, changes on the client-side can be made without any extra work on the server. Since clients can specify their exact data requirements, no backend engineer needs to make adjustments when the design and data needs on the frontend change.

4.Insightful Analytics on the Backend

- GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more. With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.

5. GraphQL uses a strong type system to define the capabilities of an API. All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server to define how a client can access the data.
Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network.
Frontend teams can easily test their applications by mocking the required data structures. Once the server is ready, the switch can be flipped for the client apps to load the data from the actual API. 

### Core Concepts

- The GraphQL Schema Definition Language(SDL) is GraphQL's own language to write schemas. They are also sometimes called Interface Definition Language(IDL).

- The main components of a schema definition are the types and their fields.

- Additional information are provided as custom directives.

- A type has a name and can implement one or more interfaces:

```
type Post implements Item {
  # ...
}
```

- A field has a name and a type:

```
age: Int
```

- GraphQL has some built in scalar values and more can be defined by concrete implementation. Some of these scalar types are:

- Int
- Float
- String
- Boolean
- ID
In addition to scalar types, a field can use any other type defined in the schema definition.

- Non-nullable fields are denoted by an exclamation mark:

```
age: Int!
```

- Lists are denoted by square brackets:

```
names: [String!]
```

- An enum is a scalar value that has a specified set of possible values:

```
enum Category {
  PROGRAMMING_LANGUAGES
  API_DESIGN
}
```

- An interface is a list of fields. A GraphQL type must have the same fields as all the interfaces it implements and all interface fields must be of the same type.

```
interface Item {
  title: String!
}
```

- A directive allows you to attach arbitrary information to any other schema definition element. Directives are always placed behind the element they describe:

```
name: String! @defaultValue(value: "new blogpost")
```

Imagine that we want to define a schema type called User who uses a bank account.

```
type User {
    name: String!
    bvnNumber: Int!
    age: Int!
}
```

- This type has three fields, they’re called `name`, `bvnNumber` and `age` and are of type String and Int. The ! following the type means that this field is required.

- It’s also possible to express relationships between types. In the example of a mobile bank application, a User could be associated with a particular bank:

```
type Bank {
    title: String!
    accountNumber: Int!
    accountName: String!
    accountType: String!
    author: User!
}
```

And then on perhaps a central database, the other end of the relationship needs to be placed on the User type.

```
type User {
    name: String!
    bvnNumber: Int!
    age: Int!
    accountType: String!
    banks: [Bank!]
}
```

In the above, a one-to-many-relationship between `User` and `Bank` was just created since the `banks` field on `User` is actually an array of banks.

### Fetching Data with Queries

- A Query in GraphQL is simply the information that the client needs to send to the server to express its data needs.

- In GraphQL, Instead of having multiple endpoints that return fixed data structures as is seen with REST, GraphQL APIs typically only expose a single endpoint. This works because the structure of the data that’s returned is not fixed. Instead, it’s completely flexible and lets the client decide what data is actually needed.

#### Basic Queries
Take a look at a typical query below:

```
{
    allUsers {
        name
    }
}
```

- The `allUsers` field in this query is called the root field of the query. Everything that follows the root field, is called the **payload** of the query. The only field that’s specified in this query’s payload is name. The query will return a list of all users currently stored in the database. Sample response:

```
{
    "allUsers": [
        { "name": "John" }, 
        { "name": "Doe" }, 
        { "name": "Jane" },  
        { "name": "Doez" },  
    ]
}
```

- Notice that each User only has the name in the response, but the nothing else is returned by the server. That’s exactly because `name` was the only field that was specified in the query.
If the client also needed the users’ `accountNumber` , all it has to do is slightly adjust the query and include the new field in the query’s payload:

```

{
    allUsers {
        name
        accountNumber
    }
}

```

- A major advantage of GraphQL is that it allows for naturally querying nested information.
For example if you wanted to load the names of all the `banks` that a `User` has opened an account with, you could simply follow the structure of your types to request this information:

```
{
    allBanks {
        name
        age
        banks {
            title
        }
    }
}
```

### Queries with Arguments

- Each field can have zero or more arguments if that’s specified in the schema. For example the `allUsers` field could have a `last` parameter to only return up to a specific number of users.

```
{
    allUsers(last: 2) {
        name
    }
}
```

### Writing Data with Mutations

- We can request information from a server but after that the next thing is to usually want to make changes to data currently stored in the backend. GraphQL changes are made using **mutations**. 
They are of three kinds generally;

1. creating new data
2. updating existing data
3. deleting existing data

- The syntax structure for mutation is similar to queries but always needs to start with the **mutation** keyword.

Let's create a new `User`

```
mutation {
    createUser(name: "Opeyemi", age: 100) {
        name
        age
    }
}
```
- GraphQL types have unique IDs that are generated by the server when new objects are created. Extending our `User` type from before, we could add an id like this:

```
 type User {
  id: ID!
  name: String!
  age: Int!
}
```

Now, when a new `User` is created, you could directly ask for the id in the payload of the mutation, since that is information that wasn’t available on the client beforehand:

```
 mutation {
  createUser(name: "Alice", age: 36) {
    id
  }
}
```

### Realtime Updates with Subscriptions

Another important requirement for many applications today is to have a realtime connection to the server in order to get immediately informed about important events. For this use case, GraphQL offers the concept of subscriptions.
When a client subscribes to an event, it will initiate and hold a steady connection to the server. Whenever that particular event then actually happens, the server pushes the corresponding data to the client. Unlike queries and mutations that follow a typical “request-response-cycle”, subscriptions represent a stream of data sent over to the client.
Subscriptions are written using the same syntax as queries and mutations. Here’s an example where we subscribe on events happening on the `User` type:

```
subscription {
  newUser {
    name
    age
  }
}
```

### Defining a Schema

- The schema is one of the most important concepts when working with a GraphQL API. It specifies the capabilities of the API and defines how clients can request the data. It is often seen as a contract between the server and client.

Now that you have a basic understanding of what queries, mutations, and subscriptions look like, let’s put it all together and learn how you can write a schema that would allow you to execute the examples you’ve seen so far.
The schema is one of the most important concepts when working with a GraphQL API. It specifies the capabilities of the API and defines how clients can request the data. It is often seen as a contract between the server and client.
Generally, a schema is simply a collection of GraphQL types. However, when writing the schema for an API, there are some special root types:

```
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

The Query, Mutation, and Subscription types are the entry points for the requests sent by the client. To enable the allUsers-query that we saw before, the Query type would have to be written as follows:

```
 type Query {
  allUsers: [User!]!
}
```

allUsers is called a root field of the API. Considering again the example where we added the last argument to the allUsers field, we’d have to write the Query as follows:

```
 type Query {
  allUsers(last: Int): [User!]!
}
```

Similarly, for the createUser-mutation, we’ll have to add a root field to the Mutation type:

```
 type Mutation {
  createUser(name: String!, age: Int!): User!
}
```

Notice that this root field takes two arguments as well, the name and the age of the new User.
Finally, for the subscriptions, we’d have to add the newUser root field:

```
 type Subscription {
  newUser: User!
}
```

Putting it all together, this is the full schema for all the queries and mutation that you have seen in this chapter:

```
 type Query {
  allUsers(last: Int): [User!]!
  allPosts(last: Int): [Post!]!
}

type Mutation {
  createUser(name: String!, age: Int!): User!
  updateUser(id: ID!, name: String!, age: String!): User!
  deleteUser(id: ID!): User!
}

type Subscription {
  newUser: User!
}

type User {
  id: ID!
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: User!
}
```