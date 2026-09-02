//icnrement the count variable when the button is clicked
// change count el variable in html to reflect the new count

 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 
 
 let count = 0

 function increment() {
     count += 1
     countEl.innerText = count 
 }

 function clearCount() {
    saveEl.innerText = "Previous Entries: "
 }

 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.innerText = count
 }
 
 
 
 

 



