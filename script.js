const display = document.querySelector("#ccl-display");
const zeroBtn = document.querySelector("#zero");
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const decimalBtn = document.querySelector("#decimal")
const clearBtn = document.querySelector("#clear")
const deleteBtn = document.querySelector("#del")

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
    setNumber(".")
});

clearBtn.addEventListener("click", clear)

deleteBtn.addEventListener("click", remove)



function setNumber(x) {
    display.textContent += x;
};


function clear() {
    display.textContent = " ";
};


function remove(string) {
    string = display.textContent
    return string.slice(0, -1)
}