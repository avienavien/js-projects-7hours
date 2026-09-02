 let saveEl = document.getElementById("save-el")
 let countEl = document.getElementById("count-el")
 
 
 let count = 0

 function increment() {
     count += 1
     countEl.innerText = count 
 }

 function clearCount() {
    count = 0
    countEl.textContent = count
    saveEl.innerText = "Previous Entries: "
 }

 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.innerText = count
 }
 
 
 
 

 



