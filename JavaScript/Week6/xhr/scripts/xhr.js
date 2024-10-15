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

  let btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", loadUsers);

  function loadUsers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "./data/users.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let output = "";
        let users = JSON.parse(this.responseText);
        users.forEach((user) => {
          output += `ID: ${user.id} <br/>NAME: ${user.name} <br/>EMAIL: ${user.email} <br/>--------------- <br/>`;
        });

        // let output = `ID: ${user.id} <br/> Name: ${user.name} <br/>Email:${user.email}`;

        document.querySelector("#data").innerHTML = output;
      }
    };

    xhr.send();

    e.preventDefault();
  }

  let btn4 = document.querySelector("#btn4");
  btn4.addEventListener("click", loadAPI);

  function loadAPI(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://reqres.in/api/users");

    xhr.onload = function () {
      if (this.status === 200) {
        let output = "";
        let users = JSON.parse(this.responseText);
        users.data.forEach((user) => {
          output += `<div class="profile"> <h1>${user.first_name}</h1>
          <div id="c1"><h2>${user.id}</h2>
          <p><img src="${user.avatar}" alt="profile" class="pic"/></p>
          </div>
           <p>${user.email}</p>  </div>`;
        });

        document.querySelector("#data").innerHTML = output;
      }
    };

    xhr.send();

    e.preventDefault();
  }
});
