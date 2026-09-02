//icnrement the count variable when the button is clicked
// change count el variable in html to reflect the new count


//document.getElementById just means that youre getting something with that id in your html file.
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
