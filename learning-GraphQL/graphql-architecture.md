# How many different kinds of architecture can include a GraphQL server?

- There are 3 different kinds of architecture that include a GraphQL server.

## GraphQL server with a connected database

- Very common for greenfield projects(projects that is being started from the scratch).

- Setup is as follows:

a. Single web server implements your GraphQL specs.

b. Server reads query's payload when query arrives and resolves the query(fetches the required information from the database).

c. Server then constructs response objects as described in specs and returns it to the client.

**GraphQL can be used with any available network protocol. It is transport-layer-agnostic.**

**GraphQL also doesn't care about the database or format used to store the data.**

## GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API

- Integration of multiple existing legacy systems/infrastructure that make it close to impossible to build innovative products, is made possible through GraphQL.

- GraphQL can be used to unify these existing systems and hide their complexity behind a nice GraphQL API. This way, new client applications can be developed that simply talk to the GraphQL server to fetch the data they need. The GraphQL server is then responsible for fetching the data from the existing systems and package it up in the GraphQL response format.

**GraphQL also doesn't care about the data sources needed to fetch the data that's needed to resolve a query.**

## A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API.

- It’s possible to combine the two approaches and build a GraphQL server that has a connected database but still talks to legacy or third—party systems.

- This allows for complete flexibility and pushing all data management complexity to the server.

### How  is GraphQL able to be very flexible?

- This is made possible by resolver functions.

- The payload of a GraphQL query (or mutation) consists of a set of fields. In the GraphQL server implementation, each of these fields actually corresponds to exactly one function that’s called a **resolver**.

**The sole purpose of a resolver function is to fetch the data for its field.**

- When the server receives a query, it will call all the functions for the fields that are specified in the query’s payload. It thus resolves the query and is able to retrieve the correct data for each field. Once all resolvers returned, the server will package data up in the format that was described by the query and send it back to the client.

This is an example of a Query

```
query {
    User(id: "alphaalpha1821805") {
        name 
        followers(first: 5) {
            name
            age
        }
    }
}
```

And this will be the resolver:

```
User(id: String!): User
name(user: User!): String
age(user: User!): Int
friends(first: Int, user: User!): [User!]!
```
And so on...

#### What do I need to know about GraphQL Client Libraries?

- When fetching data from a REST API, most applications will have to go through the following steps:

a. construct and send HTTP request (e.g. with fetch in Javascript)

b. receive and parse server response

c. store data locally (either simply in memory or persistent)

d. display data in the UI

With the ideal declarative data fetching approach, a client shouldn’t be doing more than the following two steps:

a. describe data requirements

b. display data in UI

- All the lower-level networking tasks as well as storing the data should be abstracted away and the declaration of data dependencies should be the dominant part.

- This is precisely what GraphQL client libraries like Relay or Apollo will enable you to do. 

- They provide the abstraction that you need to be able to focus on the important parts of your application rather than having to deal with the repetitive implementation of infrastructure.