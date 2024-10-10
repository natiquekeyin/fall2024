window.addEventListener("DOMContentLoaded", function () {
  // get reference to the form...[form1]
  let form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    // collect information from all the text fields...
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    addBookToList(title, isbn, author);

    e.preventDefault();
  });

  function addBookToList(t, i, a) {
    if (t === "" || i === "" || a === "") {
      showAlert("No field should be empty", "error");
    } else {
      let tr = document.createElement("tr");

      tr.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td><td ><button class="delete">X</button>`;

      document.querySelector("#list").appendChild(tr);
      clearFields();
      showAlert("Book Successfully added", "success");
    }
  }

  function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#isbn").value = "";
    document.querySelector("#author").value = "";
  }

  function showAlert(m, c) {
    let div = document.createElement("div");
    div.innerText = m;
    div.className = c;
    div.id = "box";
    document.querySelector("#notify").appendChild(div);
    setTimeout(function () {
      document.querySelector("#box").remove();
    }, 3000);
  }

  this.document.querySelector("#area").addEventListener("click", function (e) {
    deleteBook(e.target);
    //console.log(e.target);
  });

  function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
      elemToDelete.parentElement.parentElement.remove();
      showAlert("Book successfully delete", "success");
    } else {
      showAlert("Wrong area clicked!Click on X", "error");
    }
  }
});

// let's convert this code into REAL object oriented.. into the classes...
// we will make books permanent storing them in browser memory...
