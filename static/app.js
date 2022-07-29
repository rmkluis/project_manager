let body = document.querySelector('body')
let div = document.createElement('div')
let button = document.createElement('button')
let button1 = document.createElement('button')
let button2 = document.createElement('button')
///
div.textContent = "potato"
button.textContent = "employees"
button1.textContent = "matching"
button2.textContent = "projects"
///
body.append(div)
body.append(button)
body.append(button1)
body.append(button2)
///temporary buttons
button.addEventListener("click", ()=>{
    fetch("/api/employees")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(JSON.stringify(data));
    });
});
button1.addEventListener("click", ()=>{
    fetch("/api/matching")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(JSON.stringify(data));
    });
})
button2.addEventListener("click", ()=>{
    fetch("/api/projects")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(JSON.stringify(data));
    });
})


console.log("fello")



