const addPeriod = (str) => {
  //   return `${str}.`;
  return str + ".";
};

const actual = addPeriod("Hello");
const expected = "Hello.";

if (expected !== actual) {
  console.log("Test failed");
} else {
  console.log("Test Passed");
}
