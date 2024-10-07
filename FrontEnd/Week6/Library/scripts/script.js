window.addEventListener("DOMContentLoaded", function () {
  // get reference to the form...[form1]
  let form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    // collect information from all the text fields...
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    addBookToList(title, isbn, author);
    clearFields();

    e.preventDefault();
  });

  function addBookToList(t, i, a) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td><td><button>X</button>`;

    document.querySelector("#list").appendChild(tr);
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }
});
