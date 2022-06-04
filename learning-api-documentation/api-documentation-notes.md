# What I will be learning from this?

1. Endpoints
2. Parameters
3. Data Types
4. Authentication
5. Curl
6. JSON
7. The Command Line
8. Chrome's Dev Console
9. Javascript et al

- **Method Employed:** A direct, hands-on approach by using a simple weather API to put a weather forecast on my site. In other words, learning by immersion in a real scenario while using an API. Immersion in real scenarios makes these tools and technologies more meaningful.

**What Next After That?**

- Standards, tools, and specifications for REST API.

- Required sections in API documentation.

- Analysis of REST API documentation examples from various companies.

- Joining FOSS et al

## What are Web APIs?

- A Web API is an application programming interface for the Web. They exist to extend the functionality of a web browser in terms of supporting complex operations and helping to access data. For example, the Geolocation API can return the coordinates of where the browser is located.

### What are REST APIs?

- “REST” stands for Representational State Transfer.

- They are a type of web API that involve requests and responses, not too unlike visiting a web page.

- A user makes a request to a resource stored on a server, and the server responds with the requested information.

- The protocol used to transport the data is HTTP.

- All APIs that use HTTP protocol as the transport format for requests and responses are considered “web services.

- The web protocol is part of the beauty of web services: they are language agnostic and therefore interoperable across different platforms and systems. 

- When documenting a REST API, it doesn’t matter whether engineers build the API with Java, Ruby, Python, or some other language. The requests are made over HTTP, and the responses are returned through HTTP.

- This request-and-response pattern is fundamentally how REST APIs work.

- The way(programming language) by which the requests are made might be different in terms of request submission and response parsing and these aren't part of the REST API (though they might be provided in an accompanying SDK).

- In Summary, the REST API is language agnostic and handles incoming and outgoing information across HTTP, just like the web.

### What makes REST APIs unique? 

- REST is an architectural style, not a standard protocol. This is why REST APIs are sometimes called RESTful APIs — REST is a general style that the API follows.

- REST APIs can use any message format the API developers want to use, including XML, JSON, Atom, RSS, CSV, HTML, and more.

- Most REST APIs use JSON (JavaScript Object Notation) as the default message format. They use JSON because it provides a lightweight, simple, and more flexible message format that increases the speed of communication.

- The lightweight nature of JSON also allows for mobile processing scenarios and is easy to parse on the web using JavaScript.

- REST focuses on resources accessed through URLs

- The URLs are accompanied by a method that specifies how you want to interact with the resource.

- Common methods include GET (read), POST (create), PUT (update), and DELETE (remove). 

- The endpoint usually includes query parameters that specify more details about the representation of the resource you want to see. For example, you might specify (in a query parameter) that you want to limit the display to 5 instances of the resource.

`http://apiserver.com/homes?limit=5&format=json`

- The above is an example of what a REST API endpoint looks like.

- Endpoints always shows the whole path to a resource. 

- For documentation purposes, endpoints can always be separated into more specific parts:

1. The base path (or base URL or host) refers to the common path for the API. In the example above, the base path is `http://apiserver.com`

2. The endpoint refers to the end path of the endpoint. In the example above, `/homes`.

3. The `?limit=5&format=json` part of the endpoint contains query string parameters for the endpoint.

**The relationship between resources and methods is often described in terms of “nouns” and “verbs.” The resource is the noun because it is an object or thing. The verb is what you’re doing with that noun. Combining nouns with verbs is how you form the language in REST.**

- REST APIs are stateless. This means  that each time you access a resource through an endpoint, the API provides the same response.
It doesn’t remember your last request and take that into account when providing the new response. In other words, there aren’t any previously remembered states that the API takes into account with each request.

- REST APIs are also cacheable. This increases performance. If the browser’s cache already contains the information asked for in the request, the browser can just return the information from the cache instead of getting the resource from the server again.

- REST APIs do not use WSDL (Web Services Description Language) to describe elements and parameters allowed in the requests and responses. WADL file can be used but are rarely used because they do not adequate;y describe all the resources, parameters, msg formats and other attributes of REST APIs.

- To understand how to interact with a REST API, you have to read the documentation for the API.

- Some formal specifications — for example, OpenAPI and RAML — have been developed to describe REST APIs. When you describe your API using the OpenAPI or RAML specification, tools that can read those specifications (such as Swagger UI or the RAML API Console) will generate an interactive documentation output.

