//button click - submit
//form validation
let form = document.getElementById("form");
let movieInput = document.getElementById("movieInput");
let msg = document.getElementById("msg");
let directorInput = document.getElementById("directorInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

//opens the form
function openForm() {
    document.getElementById("form").style.display = "block";
}
//close the form
function closeForm() {
    document.getElementById("form").style.display = "none";
  }
//when the user is submitting the form
//prevent not to refresh automatically!
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    formValidation();
});


//form validation --> success --> accept and store the data
// --> failure --> error message
let formValidation = () => {
    // 2 stages: success and failure stage
    // if it's blank input,
    if(movieInput.value === ""){
        console.log("failure");
        msg.innerHTML = "task cannot be blank";
    }else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();


        (() =>{
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

//store the data.
//convert the object to an array
let data = [];

//on the success state! we accept and store the data
//use the function to fetch all the data from the input, and store in data
//collecting the data from the input, and push them into data
let acceptData = () => {
    data.push({
        movie:movieInput.value,
        director: directorInput.value,
        date: dateInput.value,
        description: textArea.value,
    });
    //Store the data in the local storage
    localStorage.setItem("data",  JSON.stringify(data));

    //retrieve the data
  
    console.log(data);
    createTasks();
};

//use the "Data" object inside here
let createTasks = () => {
    tasks.innerHTML = "";

    //y: 0, 1,2,3,4,5,6, attached to the id number 
    //x: individually target all the objects one by one
    data.map((x,y) => {
        return (
            tasks.innerHTML += `
            <div id=${y}>
                <span class="fw-bold">${x.movie}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.director}</p>
                <p>${x.description}</p>
                <span class="options">
                    <i onClick = "editTask(this)" class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form"></i>
                    <i onClick = "deleteTask(this); createTasks()" class="fas fa-trash-alt"></i>
                </span>
            </div>`
        );
    })

    resetForm();
    closeForm();
}

let deleteTask = (e) =>{
    e.parentElement.parentElement.remove();
    //remove 1 item with the specific id. 
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data",  JSON.stringify(data));
    console.log(data);
};

let editTask = (e) =>{
    let selectedTask = e.parentElement.parentElement;

    movieInput.value = selectedTask.children[0].innerHTML ;
    dateInput.value = selectedTask.children[1].innerHTML;
    directorInput.value = selectedTask.children[2].innerHTML;
    textArea.value = selectedTask.children[3].innerHTML;

}

let resetForm = () =>{
    movieInput.value = "";
    directorInput.value = "";
    dateInput.value = "";
    textArea.value = "";
}

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();

})();