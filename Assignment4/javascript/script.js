/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* 1. Write a function to
a. Calculate the height of the end user's browser screen */

function displayBrowserHeight() {
  console.log(`The height of the  browser screen is : ${window.innerHeight}`);
}

displayBrowserHeight();

//b. To console the name of the web host

function displayWebHostName() {
  console.log(`The name of the web host is : ${window.location.hostname}`);
}

displayWebHostName();

//c. To show a warning message if there is no https protocol used in the visited website.

function warningForNoHttpsProtocol() {
  if (window.location.protocol !== 'https:') {
    alert('No https protocol used in the visited website');
  }
}

warningForNoHttpsProtocol();

//d. To show an alert message after 10sec while the page is refreshed.

function alertAfterTenSecs() {
  alert('This is an alert message after 10 seconds.');
}

setTimeout(alertAfterTenSecs, 10000);

/* 2. Store your basic details in local storage of the browser every time the page loads,
then console them and finally delete them after 1 minute of the page load. */

function storeDetails() {
  const name = document.getElementById('name').value;
  const place = document.getElementById('place').value;

  localStorage.setItem('Name', name);
  localStorage.setItem('Place', place);

  console.log(`The value for the key 'Name' is ${localStorage.getItem('Name')}`);
  console.log(`The value for the key 'Place' is ${localStorage.getItem('Place')}`);

  function deleteFromStorage() {
    localStorage.removeItem('Name');
    localStorage.removeItem('Place');
    console.log('The details are deleted now.');
  }

  setTimeout(deleteFromStorage, 60000);
}

document.getElementById('detailsBtn').addEventListener('click', storeDetails);

/* 3. Create a form and submit button, on click of the button store
 your basic details from the form in the cookies.  */

function storeDetailsInCookie() {
  function setCookie() {
    document.cookie = `Name=${document.getElementById('name').value}`;
    document.cookie = `Place=${document.getElementById('place').value}`;
    console.log('The details are now stored in cookies.');
  }

  function getCookie() {
    if (document.cookie.length !== 0) {
      console.log(document.cookie);
    } else {
      const newLocal = 'Cookie not available';
      alert(newLocal);
    }
  }

  setCookie();
  getCookie();
}

document.getElementById('detailsBtn').addEventListener('click', storeDetailsInCookie);

//4. Redirect to the homepage of google from the console.

//window.location.href = "https://www.google.com";
//Commented since page will redirect to homepage of google.

//5. Create a div with background color red, create buttons

//a. to hide the div
const useEvents = document.querySelector('#useEvents');
const hideDiv = document.querySelector('#hideDiv');

hideDiv.addEventListener('click', () => {
  useEvents.style.display = 'none';
});

//b. to change the background color of the div

const changeBgColor = document.querySelector('#changeBgColor');

changeBgColor.addEventListener('click', () => {
  useEvents.style.backgroundColor = 'skyblue';
});

//c. to show your basic details on the div, the details should hide/show, on the click.

const detailsText = document.querySelector('#detailsText');

showDetails.addEventListener('click', () => {
  if (detailsText.style.display === 'none') {
    detailsText.style.display = 'block';
  } else {
    detailsText.style.display = 'none';
  }
});

/*6. Create a select box with numbers 1 to 10, when selected 9, you should change the
selection to 10 and show a message that "9 is fully occupied please select another number",
when selected any number other than 9 it should show a message as
"you selected 'particular number' " in a div, on hovering the div it should change the
background color of the div into a highlighting shade, while the mouse pointer leaves the message
area the background color should go back to as before
(don't use CSS to attain the hovering functionality) */

function getSelectedValue() {
  const selectedValue = document.getElementById('selectNumbers').value;
  function checkIfValueIsNine() {
    if (selectedValue === '9') {
      document.getElementById('messageForSelectBox').innerHTML = '9 is fully occupied. Please select another number.';
      document.getElementById('selectNumbers').value = '10';
    } else {
      document.getElementById('messageForSelectBox').innerHTML = `You selected : ${selectedValue}`;
    }
  }
  checkIfValueIsNine();
  document.getElementById('messageForSelectBox').addEventListener('mouseover', () => {
    messageForSelectBox.style.backgroundColor = 'skyblue';
  });
  document.getElementById('messageForSelectBox').addEventListener('mouseout', () => {
    messageForSelectBox.style.backgroundColor = 'transparent';
  });
}

selectNumbers.addEventListener('change', getSelectedValue);

/*7. Consider an array with names of 10 programming languages, make 10 buttons by iterating
 this array, when clicked on each button the name of the programming language should be
 shown in a corresponding div. */

const arrayOfLanguages = ['JavaScript', 'PHP', 'Python', 'Java', 'Ruby', 'Perl', 'C++', 'HTML', 'Kotlin', 'Swift'];

function createButton() {
  for (let i = 0; i < arrayOfLanguages.length; i += 1) {
    // document.getElementById("btnContainer").innerHTML += "<button type='button'> " +
    // arrayOfLanguages[i] + "</button>";
    const btn = document.createElement('button');
    btn.innerText = arrayOfLanguages[i];
    document.getElementById('b').innerText(btn);
    btn.addEventListener('click', () => {
      document.getElementById('msgContainer').innerHTML = `${arrayOfLanguages[i]}`;
    });
  }
}

createButton();

/*8. Create a form with a text field which when submitted, will change the tab
title to whatever is entered, limit the field to 50 characters, otherwise show
an error message, and stay on the same page when submitted(it shouldn't refresh). */

function changeTitle() {
  const titleInputed = document.getElementById('tabTitle').value;
  document.title = titleInputed;
}

document.getElementById('titleBtn').addEventListener('click', changeTitle);

//9. When the control+enter key is pressed show an alert message.

window.addEventListener('keydown', (event) => {
  // eslint-disable-next-line eqeqeq
  if (event.ctrlKey && event.keyCode == '13') {
    alert('You have now pressed \'control+enter\' key');
  }
});