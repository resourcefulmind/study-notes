# What is GraphQL?

- It is an API standard that provides a more efficient, powerful and flexible alternative to REST. Developed and open-sourced by Facebook. It enables declarative data fetching at its core.

## How do you explain declarative data fetching?

- It is a situation where a client can specify exactly what data t needs from an API.

### Brief summary of REST so we can appreciate GraphQL's improvement?

Usually, apps want to be able to fetch information that's stored remotely in a database that can be accessed over the internet. The client side will send a request to a server which then retrieves what is needed from the database and sends a response back to the client.

REST was one of the popular ways to expose data from a server. When it was developed, apps were small, simple and the development speed wasn't needed to be very fast.

### What were the 3 major factors that led to the development and design for alternatives to REST?

1. Increased mobile usage, low power devices and sloppy networks. GraphQL minimizes the amount of data that needs to be transferred over the network.

2. With GraphQL, different frontend frameworks can access precisely the data they need. This used to be very cumbersome for REST to do.

3. GraohQL makes continuous deployment faster as it eliminates modifications on specific design and requirements on the client side as thay would hinder fast dev practices and iterations.

### Is GraphQL only for React Developers?

No, Facebook started using it in 2012 for their mobile apps. It can be used with any programming language and framework. Literally everywhere where a company communicates with an API.

### Why is GraphQL a better alternative to REST APIs

1. You do not need to call multiple endpoints to obtain data, a single call can provide all the data you need.

2. It solves the problem of overfetching and underfetching.

- Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.

- Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.
As an example, consider the same app would also need to display the last three followers per user. The API provides the additional endpoint /users/<user-id>/followers. In order to be able to display the required information, the app will have to make one request to the /users endpoint and then hit the /users/<user-id>/followers endpoint for each user

3. Rapid Product Iterations on the Frontend

- With every change that is made to the UI, there is a high risk that now there is more (or less) data required than before. Consequently, the backend needs to be adjusted as well to account for the new data needs. This kills productivity and notably slows down the ability to incorporate user feedback into a product.
With GraphQL, this problem is solved. Thanks to the flexible nature of GraphQL, changes on the client-side can be made without any extra work on the server. Since clients can specify their exact data requirements, no backend engineer needs to make adjustments when the design and data needs on the frontend change.

4.Insightful Analytics on the Backend

- GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more. With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.

5. GraphQL uses a strong type system to define the capabilities of an API. All the types that are exposed in an API are written down in a schema using the GraphQL Schema Definition Language (SDL). This schema serves as the contract between the client and the server to define how a client can access the data.
Once the schema is defined, the teams working on frontend and backends can do their work without further communication since they both are aware of the definite structure of the data that’s sent over the network.
Frontend teams can easily test their applications by mocking the required data structures. Once the server is ready, the switch can be flipped for the client apps to load the data from the actual API. 