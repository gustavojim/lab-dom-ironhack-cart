// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = quantity * price;
  product.querySelector('.subtotal span').innerHTML = subtotal;
}

function calculateAll() {

// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.

// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);

// end of test

// ITERATION 2
//... your code goes here

let arrayProducts = document.getElementsByClassName('product');
for (let index = 0; index < arrayProducts.length; index++) {
  updateSubtotal (arrayProducts[index]);
}
}

// ITERATION 3
//... your code goes here






// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
