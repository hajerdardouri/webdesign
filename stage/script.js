 
const form = document.querySelector("form");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");
const hidden = document.querySelector("[name='hidden']");
const hidden1 = document.querySelector("[name='hidden1']");
const hidden2 = document.querySelector("[name='hidden2']");
const hidden3 = document.querySelector("[name='hidden3']");
const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});
navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");

});

const inputFields = [nameInput, emailInput, subjectInput, messageInput];
let FormValid = true;

function validateName (){
    
    nameInput.classList.remove("invalid");
    hidden.classList.add("hidden");
   
    if(!nameInput.value){
        nameInput.classList.add("invalid");
        hidden.classList.remove("hidden");
        FormValid = false;
    }
}
nameInput.onblur = validateName;

function validateEmail(){
    emailInput.classList.remove("invalid");
    hidden1.classList.add("hidden1");
    

    if (!(emailInput.value.match(regEmail))){
            
        emailInput.classList.add("invalid");
        hidden1.classList.remove("hidden1");
        FormValid = false;
    }
}
emailInput.onblur = validateEmail;

function validateSubject(){
    subjectInput.classList.remove("invalid");
    hidden2.classList.add("hidden2");
    

    if (!subjectInput.value){
        subjectInput.classList.add("invalid");
        hidden2.classList.remove("hidden2");
        FormValid = false;
    }
}
subjectInput.onblur = validateSubject;

function validateMessage(){

    messageInput.classList.remove("invalid");
    hidden3.classList.add("hidden3");
   
    if ((!messageInput.value)||(messageInput.value.length > 40)){
        
        messageInput.classList.add("invalid");
        hidden3.classList.remove("hidden3");
        FormValid = false;
        
    }
}
messageInput.onblur = validateMessage;

function isFormValid (){
    if ((nameInput==="")&&(emailInput==="")&&(subjectInput==="")&&(messageInput=="")){
        inputFields.classList.add("invalid");
        hidden.classList.remove("hidden");
    }
   
}
const validateInputs = ()=>{
    isFormValid(); 
    validateName ();
    validateEmail();
    validateSubject();
    validateMessage();
    
}
form.addEventListener("submit",  e =>  {
    e.preventDefault();
    isFormValid ()
    validateInputs;
    console.log(FormValid);
    if (FormValid==true) {
        alert("WE WILL RESPOND VERY SOON");
        form.reset();
    }else  if (FormValid == false) {
        alert("INVALID FORM");
        form.reset(); 
    }
});

