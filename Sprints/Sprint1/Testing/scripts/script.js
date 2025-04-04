// Customer Reviews Slider
const reviews = [
  {
    text: `"The best café in town! Love the healthy meals and cozy atmosphere!"`,
    author: "- Sarah J.",
  },
  {
    text: `"Absolutely love their organic coffee! A must-visit spot."`,
    author: "- Mark R.",
  },
  {
    text: `"Great vibes, fresh food, and friendly staff. Highly recommend!"`,
    author: "- Emily D.",
  },
];

let index = 0;
const reviewText = document.getElementById("review-text");
const reviewAuthor = document.getElementById("review-author");

function changeReview() {
  index = (index + 1) % reviews.length;
  reviewText.innerHTML = reviews[index].text;
  reviewAuthor.innerHTML = reviews[index].author;
}

// Change review every 3 seconds
setInterval(changeReview, 3000);
