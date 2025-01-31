const cars = [
    { model: "Toyota Corolla", pricePerDay: 50 },
    { model: "Honda Civic", pricePerDay: 60 },
    { model: "Ford Mustang", pricePerDay: 120 },
    { model: "Chevrolet Camaro", pricePerDay: 110 },
    { model: "Tesla Model 3", pricePerDay: 150 }
];

const carList = document.getElementById('carList');
const carForm = document.getElementById('carForm');
const carNameInput = document.getElementById('carName');
const carModelInput = document.getElementById('carModel');
const carPriceInput = document.getElementById('carPrice');

function renderCars() {
    carList.innerHTML = ""; 
    cars.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        carCard.innerHTML = `
            <h3>${car.model}</h3>
            <p>Price per day: $${car.pricePerDay}</p>
            <button onclick="bookCar(${index})">Book Now</button>
        `;

        carList.appendChild(carCard);
    });
}
carForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const carName = carNameInput.value;
    const carModel = carModelInput.value;
    const carPrice = parseFloat(carPriceInput.value);

    if (carName && carModel && !isNaN(carPrice)) {
        cars.push({ model: `${carName} ${carModel}`, pricePerDay: carPrice });

        carNameInput.value = "";
        carModelInput.value = "";
        carPriceInput.value = "";

        renderCars();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

function bookCar(index) {
    const selectedCar = cars[index];
    bookingSection.innerHTML = `
        <h2>Booking for ${selectedCar.model}</h2>
        <p>Price per day: $${selectedCar.pricePerDay}</p>
        <label for="days">Number of Days:</label>
        <input type="number" id="days" min="1" placeholder="Enter number of days" required>
        <button onclick="confirmBooking(${index})">Confirm Booking</button>
        <button onclick="cancelBooking()">Cancel</button>
    `;
}
function confirmBooking(index) {
    const selectedCar = cars[index];
    const days = document.getElementById('days').value;

    if (days && days > 0) {
        const totalPrice = selectedCar.pricePerDay * days;
        alert(`Booking Confirmed! Total price: $${totalPrice}`);
        const bookingDetails = {
            car: selectedCar,
            days: days,
            totalPrice: totalPrice
        };
        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    } else {
        alert("Please enter a valid number of days.");
    }
}

function cancelBooking() {
    bookingSection.innerHTML = ''; 
}
renderCars();
