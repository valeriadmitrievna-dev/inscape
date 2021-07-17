# INSCAPE 🌃

***Application for communication between residents of student dormitories.***
Here you can familiarize yourself with the technical side of the project and the client side, namely, what capabilities this application provides and what functionality is implemented in it.

**Deployed on [Heroku](https://dev-inscape.herokuapp.com)**

To run app on localhost clone repository and follow this commands:

    npm install
    npm run start
> Also make sure that the environment variable REACT_APP_API_URL_DEV is specified in the axios configuration as the base url, which is equal to http://localhost:5000

## Stack
- [React](https://reactjs.org) 🚀
- [Node.js](https://nodejs.org) 🍀
- [Express](https://expressjs.com) ⚡
- [styled-components](https://styled-components.com) 💅
- [Amazon S3](https://aws.amazon.com/s3/) 📂
- [Heroku](https://www.heroku.com/about) 🔮

## Pages

 - [ / ] **Home page** - here you can see logo and two buttons: *Sing in* and *Sign up*
 - [ /signin ] **Sign In page**
 - [ /signup ] **Sign Up page**
 - [ /profile/*username* ] **User profile page** - info about one user
 > if you try to go to a page of a non-existent user, you will see a nice 404 page :)
 - [ /settings ] **Settings page** - user settings, app settings and support block

> in the future, the support department is planned in a separate page
 - [ /files ] **Files page** - user files which he can upload, download and share
  ### Pages that are conditionally available
> there are links to them in the sidebar, but when we navigate we see the text: *Coming soon!*
 - [ /chat ] **Chat page**
 - [ /news] **News page**
 - [ /contacts ] **Contacts page**
 
## The app is under development, so please be patient ✨
### I will be glad to read all your recommendations for improving the application and reports on the bugs found in my mail: dev.valeriadmitrievna@gmail.com
