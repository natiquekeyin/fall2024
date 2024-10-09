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
});
