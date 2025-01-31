let getmail = document.getElementById('exampleInputEmail1');
let getname = document.getElementById('name');
let prebtn = document.getElementById('button');

prebtn.addEventListener('click',(event)=>{

    const emailError = document.getElementById('emailError');
    const nameError = document.getElementById('nameError');
    let isValid = true;
    let checkmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let checkname =/^[a-zA-Z\s]{1,50}$/;

    if(!checkmail.test(getmail.value)){
        emailError.textContent ='Enter the proper email';
        emailError.classList.remove('hide');
        isValid = false;
    }
    else{
        emailError.textContent = '';
        emailError.classList.add('hide');
    }

    if (!checkname.test(getname.value)) {
    nameError.textContent = "Name only contain letters.";
    nameError.classList.remove('hide'); 
    isValid = false;
    } 
    else{
        nameError.textContent = ""; 
        nameError.classList.add('hide');
    }
    
    if (isValid) {
        event.preventDefault();
        window.location.href ="quiz.html";
    } else {
        event.preventDefault();
    }    
})

