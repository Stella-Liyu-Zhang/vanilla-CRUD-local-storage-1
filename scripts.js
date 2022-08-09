//button click - submit
//form validation

let form = document.getElementById("form");
let textInput = document.getAnimations("textInput");
let msg = document.getElementById()
//prevent not to refresh automatically!
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    formValidation();
});

let formValidation = () =>{
    if(textInput.value === ""){
        console.log("failure");
        msg.innerHTML = "task cannot be blank";
    }else{
        console.log("success");
    }
};


