
# Test NodeJS Server
This web server is for testing client to NodeJS connection.

## Downloading and Installing dependencies for the server
[NPM](https://www.npmjs.com/) is required to run this server.

Navigate CLI to desired download location and run

**git clone https://github.com/312akim/goezz-mock-nodejs.git**

In CLI navigate to the root of the directory (inside of the directory just cloned)

To download dependencies
Run:

**npm install**

## Starting the Server
In CLI navigate to root directory.
Run:

**npm start**

Server should now be running on localhost port 3306.

Confirm by navigating to http://localhost:3306/ on a browser.
**"Server is active"** should be visible on the web page.

## Server Endpoints
    http://localhost:3306/api/twilio/sendCode
    
    Expects:
    OBJECT
    { "phoneNumber" : "<Phone # Here>" }
    
    Expected Response:
    Object
    { "message": "Successfully received number: <Phone # Here>" }