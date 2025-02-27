// ********* Bulb switch ********

// const turnOn = document.querySelector('#on');
// const turnOff = document.querySelector('#off');
// const myImage =document.querySelector('#my-img')


// turnOn.addEventListener(
//   'click',
//   () => myImage.src = 'bulb-on.png'
// );
// turnOff.addEventListener(
//   'click',
//   () => myImage.src = 'bulb-off.png'
// );


// ********* calculate price ********
// function declaration
// function calcTotalPrice() {
//     const price = 0.50;
//     const quantity =document.querySelectorAll(".quantity").value;
//     const total = document.querySelectorAll('.totalPrice');
//     const totalPrice = price * quantity;

//     total.textContent = totalPrice.toFixed(2);
// }
// // event listener
// quantity.addEventListener("change", calcTotalPrice);

// ********* calculate price ********
// function declaration
function calcTotalPrice(event) {
  const price = 0.5;
  const quantity = event.target.value; // Get the value from the event target
  const total = event.target
    .closest('.description')
    .querySelector('.totalPrice');
  const totalPrice = price * quantity;

  total.textContent = totalPrice.toFixed(2);
}

// Select all quantity inputs and attach event listeners
document.querySelectorAll('.quantity').forEach((input) => {
  input.addEventListener('input', calcTotalPrice); // Use "input" event for real-time updates
});


