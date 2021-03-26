# MGL - My Game List

https://react-mgl.herokuapp.com/

A React application where users can browse games, and see general information about a specific game. (genres, platforms, developers, etc.)

The entire project is done by using **React, GraphQL, Apollo, Express, and Node.js**.

---

## About this project

- Query data from RAWG API using _GraphQL_. (The server side)
- Display this data to the front-end using _React_ and _Apollo_ and styled it using _Bootstrap_ and _Font Awesome_. (The client side)
- The app is deployed to _Heroku_.

---

### Components

- `Navbar:` a simple navbar using _Bootstrap_. There is only a _Home_ button for now.
- `Homepage:` displays a carousel of games that are recently released. The user can click on the name of the game which redirect to another page that shows more information about it. There is also a `Browse More` button which shows a full list of all the new games from the previous month up to the current date.
- `Buttons:` There are two buttons: `Browse Games`--displaying a list of all the games that are sorted by popularity (default from RAWG); and a `Browse More`--the same functionality as the `Browse More` button.
- `Search bar:` user can enter any name of the game and it will return a list of all the games that are relevant.
- `List of games:` Displaying the image, name, released date, and rating of the games. User can click on any of them to see more information about them.
- `Game Info:` Displaying all the information about the game such as the genres, platforms, official website, developers, publishers, etc.
- `Pagination:` Custom made component. Initially, user only see ten pages (or less), but starting from page seven onward, the pagination continue to display more pages as long as there are more to display. The style is from _Bootstrap_ and have been modified to fit with the theme of the application.
- Thanks to _Bootstrap_, the majority of the components are responsive. However, components such as `List of games` and `Pagination` were modified to behave correctly.

---

### Bug/Issue

- The carousel from the homepage is not automatically scrolling until the user start it. It will work once the user click either the previous or the next arrow buttons.
- Sometime, using the back-button from the browser might not load the component correctly (nothing display). Try refresh the page or clicking the Home button to fix this problem.
- Search bar results might not accurate. This is due to the API from RAWG.

---

## To-Do | Improve the Application

- Expanding the back-end side.
- Allow user to add the game to a list.
- Using database (mongoDB) to persist the list of games that were added by the user.
- Allow user registration and login.
- Full-stack application: MERN stack.
