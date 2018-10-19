document.addEventListener('DOMContentLoaded', () => {
  console.log('Script Loaded');

  const form = document.querySelector('#new-items');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#delete-all');
  button.addEventListener('click', handleButtonClick)


});

const handleFormSubmit = function (event){
  event.preventDefault();

  const make = document.createElement('h2');
  const model = document.createElement('h3');
  const bodystyle = document.createElement('h4');
  // const vehicleClass = document.createElement('p');

  make.textContent = `${this.make.value}`;
  model.textContent = `${this.model.value}`;
  bodystyle.textContent = `${this.bodystyle.value}`;
  // vehicleClass.textContent = `${this.vehicleClass.value}`;

  const result = document.querySelector('#vehicle-list');
  result.appendChild(make);
  result.appendChild(model);
  result.appendChild(bodystyle);
  // result.appendChild(vehicleClass);
  document.getElementById('new-items').reset()
};

const handleButtonClick = function (event) {
  const result = document.getElementById('vehicle-list').textContent = '';
};
