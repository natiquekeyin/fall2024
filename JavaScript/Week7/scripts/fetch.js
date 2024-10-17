// console.log(fetch("https://reqres.in/api/users"));

window.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", loadText);

  function loadText() {
    fetch("./data/sample.txt")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Not found");
        }

        return response.text();
      })
      .then(function (data) {
        document.querySelector("#data").innerText = data;
        // console.log(data);
      });
  }

  let btn2 = document.querySelector("#btn2");

  // function loadJSON() {
  //   fetch("./data/user.json")
  //     .then(function (response) {
  //       if (!response.ok) {
  //         throw new Error("Not found");
  //       }
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       document.querySelector("#data").innerHTML = `<div>
  //      <h1>${data.name}</h1><h2>${data.id}</h2><h2>${data.email}</h2></div>`;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  const loadJSON = async () => {
    try {
      let response = await fetch("https://reqres.in/ai/users");
      let data = await response.json();
      this.document.querySelector(
        "#data"
      ).innerHTML = `<div><h1>Name:${data.data[0].first_name}</h1></div>`;
    } catch (error) {
      this.document.querySelector("#data").innerHTML = `The error is: ${error}`;
    }
  };

  btn2.addEventListener("click", loadJSON);
});
