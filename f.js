
// OWNED BY ACTWU
// CREDIT ME IF YOU USE XDD
function el(op) {

const {name, par, val, clas, did, at} = op;
const newElement = document.createElement(name);
const parentElement = document.querySelector(par);
newElement.textContent = val;
newElement.innerText = val;
newElement.value = val;
newElement.classList = clas;
newElement.id = did;
if (name == "p") {newElement.setAttribute("b", "")}
else if (name == "box") {newElement.setAttribute("b", "")}
newElement.setAttribute(at, "");
parentElement.append(newElement);
}

function elClass(op) {
const {name, clas } = op;

const newElement = document.createElement(element);
newElement.classList = clas;
}

function elAddclass(op) {
const {name, clas } = op;

const newElement = document.createElement(element);
newElement.classList.add(clas);
}

function elRemClass(op) {
const {name, clas } = op;

const newElement = document.createElement(element);
newElement.classList.remove(clas);
}

function elTogClass(op) {
const {name, clas } = op;

const newElement = document.createElement(element);
newElement.classList.add(clas);
}

function elAt(op) {
const {name, at, val } = op;

const newElement = document.createElement(element);
newElement.setAttribute(at, val);
}

function elRemAt(op) {
const {name, at, val } = op;

const newElement = document.createElement(element);
newElement.removeAttribute(at, val);
}

function elId(op) {
const {name, did } = op;

const newElement = document.createElement(element);
newElement.id = did;
}
