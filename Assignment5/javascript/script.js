/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

/*1. Make a form with fields name, phone number, place, company name, pin code

a. if any of the fields are empty on submitting it should show corresponding error
messages below all the required fields. */

/*b. pin code and mobile number fields should not be submitted with non-integer values,
if so, then show an error msg stating only numbers are allowed. */

/*c. The minimum length of the phone number should be 10,
otherwise, show the corresponding error msg below the mobile no. field */

/*d. On submission of the form, store the details in the local storage and clear the form.
(it should stay on the same page don't refresh the page). */

//store it as single object

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let place = document.getElementById('place');
let company = document.getElementById('company');
let pincode = document.getElementById('pincode');
let validationForm = document.getElementById('validationForm');

function formValidate(event) {
  valid = true;
  event.preventDefault();

  if (name.value === '' || name.value == null) {
    nameErrorContainer.innerText = 'This field is required.';
    valid = false;
  }
  if (phone.value === '' || phone.value == null) {
    phoneErrorContainer.innerText = 'This field is required.';
    valid = false;
  } else if (!/^\d+$/.test(phone.value)) {
    phoneErrorContainer.innerText = 'Only numbers are allowed';
    valid = false;
    phone.value = '';
  } else if (phone.value.length < 10) {
    phoneErrorContainer.innerText = 'Length of the phone number should be 10';
    valid = false;
    phone.value = '';
  }
  if (place.value === '' || place.value == null) {
    placeErrorContainer.innerText = 'This field is required.';
    valid = false;
  }
  if (company.value === '' || company.value == null) {
    companyErrorContainer.innerText = 'This field is required.';
    valid = false;
  }
  if (pincode.value === '' || pincode.value == null) {
    pincodeErrorContainer.innerText = 'This field is required.';
    valid = false;
  } else if (!/^\d+$/.test(pincode.value)) {
    pincodeErrorContainer.innerText = 'Only numbers are allowed';
    valid = false;
    phone.value = '';
  }

  if (valid === true) {
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Phone', phone.value);
    localStorage.setItem('Place', place.value);
    localStorage.setItem('Company', company.value);
    localStorage.setItem('Pincode', pincode.value);
    const inputToClear = document.querySelectorAll(".form-input-space");
    inputToClear.forEach((element) => {
      element.value = "";
    });
  }

}

// Submit the values only when all the validations are successful.
// If any field has a validation issue, there is no need to clear the values of all the other fields.
validationForm.addEventListener('submit', formValidate);


/*e. Make a prepopulate button, which when clicked will populate the
 form with values in the local storage if it exists, otherwise, the button will be disabled. */

function prepopulateDetails() {
  // get getElementById() on top and use the names here
  name.value = localStorage.getItem('Name', name.value);
  phone.value = localStorage.getItem('Phone', phone.value);
  place.value = localStorage.getItem('Place', place.value);
  company.value = localStorage.getItem('Company', company.value);
  pincode.value = localStorage.getItem('Pincode', pincode.value);
}

prepopulateBtn.addEventListener('click', prepopulateDetails);

/*2. Create a button and div using JS, when clicked on the button your basic details
should be shown in the div. The static HTML file should only contain the basic HTML structure,
no div/buttons. */

const displayBasicDetailsBtn = document.createElement('button');
displayBasicDetailsBtn.innerText = 'Display';
document.body.appendChild(displayBasicDetailsBtn);

function displayBasicDetails() {
  //if localstorage having any other site data, how to handle that??
  for (let i = 0; i < localStorage.length; i += 1) {
    const displayBasicDetailsContainer = document.createElement('div');
    document.body.appendChild(displayBasicDetailsContainer);
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const node = document.createTextNode(`${key} : \n ${value} `);
    displayBasicDetailsContainer.appendChild(node);
  }
}
displayBasicDetailsBtn.addEventListener('click', displayBasicDetails);

//3. Create a private variable and console it by accessing it.

const Student = ({ studentName, studentAge, studentPlace }) => {
  const _name = studentName;
  const _age = studentAge;
  let _place = studentPlace;

  return {
    getName: () => _name,
    getAge: () => _age,
    getPlace: () => _place,
    // eslint-disable-next-line no-return-assign
    setPlace: (newPlace) => (_place = newPlace),
  };
};

const student1 = Student({
  studentName: 'Amil',
  studentAge: '13',
  studentPlace: 'India',
});
console.log(student1.getName());
console.log(student1.getAge());
console.log(student1.getPlace());
student1.setPlace('Canada');
console.log(student1.getPlace());

//4. Create a static variable and console it by accessing it.

class Employee {
  static numberOfEmployees = 0;

  static showMessage() {
    console.log('Welcome Onboard!');
  }

  constructor(employeeName) {
    this.employeeName = employeeName;
    Employee.numberOfEmployees += 1;
  }
}

const employee1 = new Employee('Anagha');
const employee2 = new Employee('Aswani');
const employee3 = new Employee('Arathi');

console.log(Employee.numberOfEmployees);
Employee.showMessage();
