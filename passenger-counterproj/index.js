//icnrement the count variable when the button is clicked
// change count el variable in html to reflect the new count


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count 
}

function clearCount() {
    count = 0
    countEl.innerText = count;
}
