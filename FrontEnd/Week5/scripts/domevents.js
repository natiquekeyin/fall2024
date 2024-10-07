window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content loaded");

  this.document.body.addEventListener("mousemove", function (e) {
    // console.log(e.clientX);
    // console.log(e.clientY);

    document.querySelector(
      "#posX"
    ).innerHTML = `X position is <strong> ${e.clientX} </strong>and you clicked on ${e.currentTarget} element`;
    document.querySelector(
      "#posY"
    ).innerHTML = `Y position is <strong> ${e.clientY} </strong>and you clicked on ${e.target} element`;
  });

  let cat = document.querySelector("#cat");

  cat.addEventListener("click", handleClick);

  let currentCatIndex = 0;
  function nextCatImageUrl() {
    if (currentCatIndex === cats.length - 1) {
      currentCatIndex = 0;
    }
    return cats[currentCatIndex++];
  }

  function handleClick(evt) {
    cat.src = nextCatImageUrl();

    evt.stopPropagation();
  }

  let btn1 = document.querySelector("#btn1");

  btn1.addEventListener("click", moreCats);

  function moreCats(evt) {
    let ol = document.createElement("ol");

    cats.forEach((url) => {
      let li = document.createElement("li");
      li.innerHTML = `<a href ="${url}">${url}</a>`;
      ol.appendChild(li);
    });

    document.querySelector("#list").appendChild(ol);

    // console.log(ol);
    evt.stopPropagation();
  }

  // Timer functions...
  // this.setTimeout(function () {
  //   cat.src = nextCatImageUrl();
  // }, 3000);

  setInterval(function () {
    cat.src = nextCatImageUrl();
  }, 3000);
});
