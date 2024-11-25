const addPeriod = (str) => {
  //   return `${str}.`;
  return str + ".";
};

const actual = addPeriod("Hello");
const expected = "Hello.";

if (expected !== actual) {
  alert("Test failed");
} else {
  alert("Test Passed");
}
