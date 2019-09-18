'use strict';

var allStores = [];

function CoffeeShop(minCust, maxCust, cupsPerCustomer, locationName) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cupsPerCustomer = cupsPerCustomer;
  this.locationName = locationName;
  allStores.push(this);
}

//instantiate stores
new CoffeeShop(3, 7, 2, 'Seattle');
new CoffeeShop(2, 6, 3, 'Tacoma');

console.log('allStores: ', allStores);

var addStoreBtn = document.getElementById('user-form-addStore');
addStoreBtn.addEventListener('submit', addNewStore);

//creating a new store
function addNewStore(event) {
  event.preventDefault();
  var minCust = event.target.minimum_customer.value;
  var maxCust = event.target.maximum_customer.value;
  var cupsPerCustomer = event.target.average_cups.value;
  var locationName = event.target.loc_name.value;

  alert(`${minCust} ${maxCust} ${cupsPerCustomer} ${locationName} `);
  new CoffeeShop(+minCust, +maxCust, +cupsPerCustomer, locationName);
  console.log('allStores: ', allStores);

  event.target.minimum_customer.value = null;
  event.target.maximum_customer.value = null;
  event.target.average_cups.value = null;
  event.target.loc_name.value = null;
}
