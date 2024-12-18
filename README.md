Github live link: https://hollidah.github.io/flatdango/

# Flatdango - Movie Theater Web Application

Flatdango is a simple web-based movie theater application where users can view available movies, see details about each movie, and purchase tickets. The project demonstrates a basic setup for displaying dynamic movie data using HTML, CSS, and JavaScript.

## Features

- **Movie List**: Displays a list of available movies.
- **Movie Details**: Shows details such as runtime, capacity, showtime, tickets sold, and description when a movie is clicked.
- **Buy Tickets**: Allows users to purchase tickets for a movie (with a check for capacity).

## Technologies Used

- HTML
- CSS
- JavaScript 
- Fetch API (to retrieve movie data from a local JSON file)

### Project Structure

The project structure is simple, consisting of the following files:

   - **index.html**    Main HTML file
   - **style.css**     Styles for the application
   - **index.js**      JavaScript file for fetching data and interaction

index.html: Contains the layout and structure of the application.
style.css: Provides styling for the movie list and details sections.
index.js: Contains JavaScript code to fetch movie data and display it on the page.

### Functionality:

Movie List: On page load, the movie titles are displayed as clickable buttons. Each movie has its own button.
Movie Details: When a user clicks a movie button, the movie details (poster, title, runtime, capacity, showtime, tickets sold, and description) are displayed.
Buy Ticket: When the "Buy Ticket" button is clicked, the number of tickets sold for that movie increases, and an alert is shown. If all tickets are sold out, an alert is displayed.

### Notes:

This project assumes the presence of a local db.json file or a similar source of movie data.
The current version of the app doesn't have a back-end to store ticket purchases permanently. This is a front-end demonstration.

Author: Hollidah Chemutai
