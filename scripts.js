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
    }
};

//store the data.
let data = {}

//on the success state! we accept and store the data
//use the function to fetch all the data from the input, and store in data
//collecting the data from the input, and push them into data
let acceptData = () => {
    data["movie"] = movieInput.value;
    data["director"] = directorInput.value;
    data["date"] = dateInput.value;
    data["description"] = textArea.value;

    createTasks();
};

//use the "Data" object inside here
let createTasks = () => {
    tasks.innerHTML += `
    <div>
        <span class="fw-bold">${data.movie}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.director}</p>
        <p>${data.description}</p>
        <span class="options">
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
        </span>
    </div>`;

    resetForm();
}


let resetForm = () =>{
    movieInput.value = "";
    directorInput.value = "";
    dateInput.value = "";
    textArea.value = "";
}