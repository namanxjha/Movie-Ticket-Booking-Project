const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

//update count and total with price
function updatePrice() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;
}

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice)
}

//seat click event listener
container.addEventListener("click", e => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updatePrice();
    }
});

//movie selection event listener
movieSelect.addEventListener("change", e => {
    ticketPrice = e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updatePrice();
})