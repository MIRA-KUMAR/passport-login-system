# passport-login-system

1. `npm init` -> install all dependencies 
2. `npm i express ejs`
    ejs is a Embedded js and a template engine to create dynamic HTML pages 
    express for servers and routes
3. `npm i --save-dev nodemon dotenv`
    save dependencies only in dev environment 
    dotenv to convert .env file to a process.env (loading into server)
4. `npm run devStart` 
    to run the server.js file
5. `npm i bcrypt`
    to hash passwords
6. `npm i passport passport-local express-session express-flash`
    passport - authentication middleware
    passport-local - used to authenticate with username and password
    express-session - to store session data
    express-flash - for displaying flash messages   