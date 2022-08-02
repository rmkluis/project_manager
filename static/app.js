let body = document.querySelector("body");
let left = document.createElement("div");
let user = document.createElement("div");
let addEmployee = document.createElement("div");
let addProject = document.createElement("div");
let employeeBoxL = document.createElement("div");
let projectBoxL = document.createElement("div");
//
let loginBox = document.createElement("div");
let inputName = document.createElement("input");
let inputPW = document.createElement("input");
let loginButton = document.createElement("button");
let loginText = document.createElement("div");
let loginText2 = document.createElement("div");

///////////////////////////////////////////////// Login /////////////////////////////////////////////////
body.append(loginBox);
loginBox.classList.add("login");
loginText.textContent = "username:";
loginText2.textContent = "password:";
loginBox.append(loginText);
loginBox.append(inputName);
inputName.setAttribute("id", "inputName");
loginBox.append(loginText2);
loginBox.append(inputPW);
inputPW.setAttribute("id", "inputPW");
loginBox.append(loginButton);
loginButton.textContent = "login";
loginButton.classList.add = "loginButton";
///////////////////////////////////////////////// Left Menu /////////////////////////////////////////////////
loginButton.addEventListener("click", () => {
  let supe = document.getElementById("inputName").value;
  let password = document.getElementById("inputPW").value;
  if (supe === "Steve" && password == "password") {
    ///remove login///
    loginBox.remove();

    body.append(left);
    left.append(user);
    left.classList.add("left");
    user.classList.add("user");
    user.textContent = `${supe}'s team & tasks`;
    left.append(addEmployee);
    addEmployee.textContent = "addEmployee";
    left.append(employeeBoxL);
    employeeBoxL.textContent = "employeeBoxL";
    employeeBoxL.classList.add("boxL");
    left.append(addProject);
    addProject.textContent = "addProject";
    left.append(projectBoxL);
    projectBoxL.textContent = "projectBoxL";
    projectBoxL.classList.add("boxL");

    let tasklistBox = document.createElement("div");
    tasklistBox.classList.add("tasklistBox");
    body.append(tasklistBox);
    ///////////////////
    const removeChilds = (parent) => {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    };
    ///////////////////
    fetch("/api/employees")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < JSON.stringify(data).length; i++) {
          console.log(data[i].supervisor);
          if (data[i].supervisor === supe) {
            let employee = document.createElement("div");
            employeeBoxL.append(employee);
            employee.textContent = data[i].first_name + " " + data[i].last_name;
            employee.addEventListener("click", (e) => {
                removeChilds(tasklistBox)
                ///
                let empDataBox = document.createElement('div')
                empDataBox.classList.add('empDataBox')
                tasklistBox.append(empDataBox)
                //
                let taskEmp = document.createElement('div')
                taskEmp.textContent = e.target.textContent
                empDataBox.append(taskEmp)
                ///
                let taskEmpEmail = document.createElement('div')
                taskEmpEmail.textContent = data[i].email
                empDataBox.append(taskEmpEmail)
                ///
                let taskEmpPhone = document.createElement('div')
                taskEmpPhone.textContent = data[i].phone_number
                empDataBox.append(taskEmpPhone)
          });
          }
        }
      });
    ///////////////////
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < JSON.stringify(data).length; i++) {
          console.log(data[i]);
          ////
          let project = document.createElement("div");
          projectBoxL.append(project);
          project.textContent = data[i].project_name;
          ///
          project.addEventListener('click', (e)=>{
            fetch("/api/matching")
            .then((responses) => responses.json())
            .then((datax) => {
              for (let j = 0; j < JSON.stringify(datax).length; j++) {
                let projectTaskBox = document.createElement('div')
                console.log(data[i].project_name)
                projectTaskBox.textContent = data[i].project_name
                tasklistBox.append(projectTaskBox)

              }
            })
          })
        }
      });
    }
});
////

///temporary buttons
// button.addEventListener("click", ()=>{
//     fetch("/api/employees")
//     .then((response)=> response.json())
//     .then((data)=>{
//         console.log(JSON.stringify(data));
//         let biv = document.createElement('div')
//         biv.textContent = JSON.stringify(data);
//         div.append(biv)
//     });
// });

console.log("hello");
