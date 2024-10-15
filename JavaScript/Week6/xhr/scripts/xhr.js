window.addEventListener("DOMContentLoaded", function () {
  // get the reference to the button and attach a click event with it..

  let btn1 = document.querySelector("#btn1");

  btn1.addEventListener("click", loadData);

  function loadData() {
    //    create an XHR object
    const xhr = new XMLHttpRequest();

    // configure the request..
    xhr.open("GET", "./data/sample.txt");

    // what to do when data is available..
    xhr.onload = function () {
      if (this.status === 200) {
        document.querySelector("#data").innerText = this.responseText;
      } else {
        document.querySelector("#data").innerText = "SOME ERROR HAPPENED";
      }
    };

    // send the request
    xhr.send(); //one thousand times I will forget this step...
  }

  let btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", loadJSON);

  function loadJSON(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "./data/user.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let user = JSON.parse(this.responseText);
        let output = `ID: ${user.id} <br/> Name: ${user.name} <br/>Email:${user.email}`;

        document.querySelector("#data").innerHTML = output;
      }
    };

    xhr.send();

    e.preventDefault();
  }
});
