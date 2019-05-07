/* 

https://raygun.com/blog/soap-vs-rest-vs-json/

Both SOAP and REST are used to transfer data between two applications via the web.

Both services allow the developer to create their own APIs. 

-------- SOAP -------

'Simple Object Access Protocol'

Until REST, SOAP was the primary messaging protocol. 

SOAP is a standardized protocol that uses other web protocols to transfer data (HTTP, SMTP, TCP, UDP, etc.). 

SOAP specifications are official web standards and are maintained by W3C. 

SOAP has built-in security features, error handling, and authorization but requires more bandwidth and computing power than REST as it is more complex.

SOAP only sends and returns XML. 

Use Case: When increased security is required, with legacy systems, if requiring stateful operations (SOAP defaults to stateless but can be changed), and/or on distributed enterprise environments.

-------- REST --------

'Representational State Transfer'

REST was created to address the limitations of SOAP, such as slower page load times. 

REST allows different messaging formats like HTML, XML, JSON, and plain text.

REST is not a protocol, it's an architectural style that includes a specific set of guidelines.

Guidelines: 
1. Uniform Interface: All requests from all clients should look the same, regardless of where they originate. 
2. Client-Server Separation: The Client and Server should act entirely independent of one another. 
3. Statelessness: There shouldn't be any server-side sessions. The request sends the server everything it needs to know. 
4. Cacheable Resources
5. Layered System: The request or response shouldn't be affected by multiple layers between the client and server. 
6. Code on Demand (Optional): The response can contain executable code that the client can execute. 

Use Cases: Public, web-based APIs (desktop and mobile)

*/