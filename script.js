const display = document.querySelector("#ccl-display");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");

const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");

const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");

const zeroBtn = document.querySelector("#zero");
const decimalBtn = document.querySelector("#decimal")
const times10 = document.querySelector("#x10")

const clearBtn = document.querySelector("#clear")
const deleteBtn = document.querySelector("#del")

const multiplyBtn = document.querySelector("#multiply")
const divideBtn = document.querySelector("#divide")

const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")

const ansBtn = document.querySelector("#ans")
const equalsBtn = document.querySelector("#equals")


zeroBtn.addEventListener("click", () => {
    setNumber(0)
});

oneBtn.addEventListener("click", () => {
    setNumber(1)
});

twoBtn.addEventListener("click", () => {
    setNumber(2)
});


threeBtn.addEventListener("click", () => {
    setNumber(3)
});


fourBtn.addEventListener("click", () => {
    setNumber(4)
});

fiveBtn.addEventListener("click", () => {
    setNumber(5)
});

sixBtn.addEventListener("click", () => {
    setNumber(6)
});

sevenBtn.addEventListener("click", () => {
    setNumber(7)
});

eightBtn.addEventListener("click", () => {
    setNumber(8)
});

nineBtn.addEventListener("click", () => {
    setNumber(9)        
});

decimalBtn.addEventListener("click", () => {
    setNumber(".");
});

times10.addEventListener("click", () => {
    addZero()       
});


deleteBtn.addEventListener("click", remove);

clearBtn.addEventListener("click", clear);

multiplyBtn.addEventListener("click", () => {
    setNumber("*")
});

divideBtn.addEventListener("click", () => {
    setNumber("/")
});

addBtn.addEventListener("click", () => {
    setNumber("+")
});

subtractBtn.addEventListener("click", () => {
    setNumber("-")
});

equalsBtn.addEventListener("click", () => {
    operate();
});


function setNumber(x) {
    if (display.textContent.includes(".")) {
        decimalBtn.setAttribute("disabled", ""); 
    } else {
        decimalBtn.removeAttribute("disabled");
    }
    display.textContent += x;
};


function clear() {
    display.textContent = "";
};


function remove() {
    display.textContent.slice(0, -1)
};


function operate() {
    display.textContent = eval(display.textContent)
}


function addZero() {
    display.textContent += 0
}