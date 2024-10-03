window.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content loaded");

  this.document.body.addEventListener("click", function (e) {
    console.log("Body clicked");
    console.log(e.target);
  });

  let cat = document.querySelector("#cat");

  cat.addEventListener("click", handleClick);

  let currentCatIndex = 0;
  function nextCatImageUrl() {
    return;
  }

  function handleClick(evt) {
    cat.src = nextCatImageUrl();

    evt.stopPropagation();
  }
});
