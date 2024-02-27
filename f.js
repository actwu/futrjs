// OWNED BY ACTWU
// CREDIT ME IF YOU USE XDD

function el(element, parent, dval, dclas, did, datt) {
const newElement = document.createElement(element);
const par = document.querySelector(parent);
newElement.textContent = dval;
newElement.classList = dclas;
newElement.id = did;

if (element == "p") {newElement.setAttribute("b", "")}
else if (element == "box") {newElement.setAttribute("b", "")}
newElement.setAttribute(datt, "");

par.appendChild(newElement);
}

function elClass(element, dclas) {
const newElement = document.createElement(element);
newElement.classList = dclas;
}

function elAddClass(element, dclas) {
const newElement = document.createElement(element);
newElement.classList.add(dclas);
}

function elRemClass(element, dclas) {
const newElement = document.createElement(element);
newElement.classList.remove(dclas);
}

function elTogClass(element, dclas) {
  const newElement = document.createElement(element);
  newElement.classList.add(dclas);
  }
function elAt(element, datt, dval) {
const newElement = document.createElement(element);
newElement.setAttribute(datt, dval);
}

function elRemAt(element, datt, dval) {
const newElement = document.createElement(element);
newElement.removeAttribute(datt, dval);
}

function elId(element, did, dval) {
const newElement = document.createElement(element);
newElement.id = datt;
}
