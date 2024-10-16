window.addEventListener("DOMContentLoaded", function () {
  //Store.displayBooks();

  class Book {
    constructor(t, i, a) {
      this.title = t;
      this.isbn = i;
      this.author = a;
    }
    //  in legacy terms, it is a function...in OOP world this is actually called as "method".
    addBookToList(book) {
      if (book.title === "" || book.isbn === "" || book.author === "") {
        this.showAlert("No field should be empty", "error");
      } else {
        let tr = document.createElement("tr");

        tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td ><button class="delete">X</button>`;

        document.querySelector("#list").appendChild(tr);
        this.clearFields();
        // this.showAlert("Book Successfully added", "success");
      }
    }

    clearFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#isbn").value = "";
      document.querySelector("#author").value = "";
    }

    showAlert(m, c) {
      let div = document.createElement("div");
      div.innerText = m;
      div.className = c;
      div.id = "box";
      document.querySelector("#notify").appendChild(div);
      setTimeout(function () {
        document.querySelector("#box").remove();
      }, 3000);
    }

    deleteBook(elemToDelete) {
      if (elemToDelete.className === "delete") {
        var isbn =
          elemToDelete.parentElement.previousElementSibling.textContent;
        elemToDelete.parentElement.parentElement.remove();
        Store.removeBook(isbn);
        this.showAlert("Book successfully delete", "success");
      } else {
        this.showAlert("Wrong area clicked!Click on X", "error");
      }
    }
  }
  // this class will be used to permanently store books in the browser memory....
  class Store {
    // thsi will add the book object to the browser memory when called...
    static addBook(book) {
      var books = Store.getBooks(); //read already store books from the memory
      books.push(book);
      //   stringify converst normal object into json...
      localStorage.setItem("books", JSON.stringify(books));
    }
    static getBooks() {
      var books;

      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        // the stored data is json...
        // we need to convert it into normal objects...

        books = JSON.parse(localStorage.getItem("books"));
      }
      return books;
    }
    static displayBooks() {
      var books = Store.getBooks();
      books.forEach((book) => {
        // each book should be displayed in the table below form..
        //addBookToList(book); //cannot directly call addBookToList(). Why? because addBookTOList() is in another class and it is not STATIC....

        var objBook = new Book();
        objBook.addBookToList(book);
      });
    }
    static removeBook(isbn) {
      // remove a book from memory...
      // use filter() method: filter() returns a new array on the basis of given condition...

      // books = books.filter((book)=>)

      var books = Store.getBooks();
      books = books.filter((book) => book.isbn !== isbn);

      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  let form = document.querySelector("#form1");
  form.addEventListener("submit", function (e) {
    // collect information from all the text fields...
    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;

    let book = new Book(title, isbn, author);

    book.addBookToList(book); //adding the book to UI
    Store.addBook(book); //static members are called class level members...
    book.showAlert("Book Successfully added", "success");

    e.preventDefault();
  });

  this.document
    .querySelector("#area")
    .addEventListener("click", function (evt) {
      var book = new Book(); //because delte book is in Book class and we don't have access to book object here..
      book.deleteBook(evt.target);

      Store.removeBook(isbn);
      evt.preventDefault();
    });

  Store.displayBooks();
});

// function, method, object...
// In Javascript when we create directly, they are more rferred to as "functions"
// in OOP world, the "functions" , they are called "methods"
// Object... object is actually an instantiation of a "class",we create objects to use the class.. the objects have access to all the methods and variables of our class.

// iF we define something static in a class, IT CAN BE ACCESSED WITHOUT CREATING OBJECT OF THAT CLASS..BY USING THE CLASS NAME ITSELF...
