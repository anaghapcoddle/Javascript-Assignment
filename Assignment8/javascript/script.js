const xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3000/user');
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const basicDetailsData = JSON.parse(xhr.responseText);
    const mydetails = basicDetailsData[0];
    const dataList = Object.values(mydetails);
    dataList.forEach((data) => {
      const divElement = document.createElement('div');
      divElement.textContent = data;
      document.getElementById('details-div').appendChild(divElement);
    });
  }
};
