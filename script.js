const getElementId = document.getElementById
const display = getElementId("ccl-display") 

const zero = getElementId("zero")
zero.addEventListener("click", () => {
    getNumber(0)
});


const one = getElementId("one")


const two = getElementId("two")


const three = getElementId("three")


const four = getElementId("four")


const five = getElementId("five")


const six = getElementId("six")


const seven = getElementId("seven")


const eight = getElementId("eight")


const nine = getElementId("nine")




function getNumber(x) {
    display.innerText = x;
}