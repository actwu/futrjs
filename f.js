
// OWNED BY ACTWU
// CREDIT ME IF YOU USE XDD
function el(op) {

    const body = document.querySelector("body");
    const {name, par, val, clas, did, at, atval} = op;
    const newElement = document.createElement(name);
    const parentElement = document.querySelector(par);
    
    if (val !== "" || val !== " ") { newElement.textContent = val; }
    else { newElement.textContent = "None" }
   
    if (clas !== "" || clas !== " ") { newElement.classList = clas; }
    
    if (did !== "" || did !== " ") { newElement.id = did; }
    else { newElement.id = Math.floor(Math.random() * 99); }
  
  
    if (par !== "" || par !== "" || par) { parentElement.append(newElement); }
    else { body.append(newElement); }


    if (at !== "" || at !== " " || at) { newElement.setAttribute(at, atval); }
    else {at = ""; newElement.setAttribute("none", "")}

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
    
