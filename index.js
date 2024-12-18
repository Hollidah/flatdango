// Fetch data from db.json
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => initializeFlatdango(data))  // Assuming the data is directly an array of films
  .catch((error) => console.error("Error fetching data:", error));

function initializeFlatdango(films) {
  const movieList = document.getElementById("movies-list"); 
  const moviePoster = document.getElementById("movie-poster");
  const movieTitle = document.getElementById("movie-title");
  const movieRuntime = document.getElementById("movie-runtime");
  const movieCapacity = document.getElementById("movie-capacity");
  const movieShowtime = document.getElementById("movie-showtime");
  const ticketsSold = document.getElementById("movie-tickets-sold");
  const movieDescription = document.getElementById("movie-description");
  const buyTicketButton = document.getElementById("buy-ticket");

  // Clear previous buttons before populating
  movieList.innerHTML = '';

  // Populate movie list
  films.forEach((film) => {
    const movieButton = document.createElement("button");
    movieButton.classList.add("movie-button");
    movieButton.textContent = film.title;
    movieButton.addEventListener("click", () => showMovieDetails(film));
    movieList.appendChild(movieButton);
  });

  // Show details of the first movie by default
  showMovieDetails(films[0]);

  // Function to display movie details
  function showMovieDetails(film) {
    moviePoster.src = film.poster;
    movieTitle.textContent = film.title;
    movieRuntime.textContent = film.runtime;
    movieCapacity.textContent = film.capacity;
    movieShowtime.textContent = film.showtime;
    ticketsSold.textContent = film.tickets_sold;
    movieDescription.textContent = film.description;

    // Change functionality for the buy ticket button
    let ticketCount = film.tickets_sold;
    buyTicketButton.onclick = () => {
      if (ticketCount < film.capacity) {
        ticketCount++;
        ticketsSold.textContent = ticketCount;
        alert("Ticket purchased successfully!");
      } else {
        alert("Tickets sold out!");
      }
    };
  }
}
