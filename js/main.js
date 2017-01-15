import '../styles/style.scss';
console.log("hi there from webpack :)");

const testVariable = `Test ES6 with template strings`;
const name = "Johdes";
const age = 9000;
const newObl = {
    name,
    age,
    testVariable
}

const secObj = {age: 10000};

setTimeout(() => console.log("The message after timeout"), 2000);
const clicked = () => {
    console.log(secObj);
}