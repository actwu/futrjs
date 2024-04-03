

// OWNED BY ACTWU
// CREDIT ME IF YOU USE XDD
function el(op) {

let HTMLbody = document.querySelector("body");
const {name, par, val, clas, id, at, atval} = op;
let newElement = document.createElement(name); 
const parentElement = document.querySelector(par);

if (val !== "" || val !== " " || val) { newElement.textContent = val; }
else { newElement.textContent = "None" }

if (clas !== "" || clas !== " " || clas) { newElement.classList = clas; }

if (id !== "" || id !== " " || id) { newElement.id = id; }
else { newElement.id = Math.floor(Math.random() * 99); }

if (at !== "" || at !== " " || at) { newElement.setAttribute(at, atval); }
else { newElement.setAttribute("none", ""); }

if(par === "" || par === " " || !par ) { HTMLbody.append(newElement); }
else { parentElement.append(newElement); }

}

function elClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList = clas;
}

function elAddclass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.add(clas);
}

function elRemClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.remove(clas);
}

function elTogClass(op) {
const {name, clas } = op;

const target = document.querySelector(name);
target.classList.add(clas);
}

function elAt(op) {
const {name, at, val } = op;

const target = document.querySelector(name);
target.setAttribute(at, val);
}

function elRemAt(op) {
const {name, at, val } = op;

const target = document.querySelector(name);
target.removeAttribute(at, val);
}

function elId(op) {
const {name, id } = op;

const target = document.querySelector(name);
target.id = id;
}
