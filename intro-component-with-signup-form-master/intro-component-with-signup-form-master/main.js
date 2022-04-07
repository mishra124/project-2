const form = document.getElementById('form');

form.addEventListener('submit', e => {
e.preventDefault();
const firstname = form['firstname'].value;
const lastname = form['lastname'].value;
const email = form['email'].value;
const password = form['password'].value;

    if(firstname === ''){
    addError('firstname','First Name cannot be Empty');
    } else{
    removeError('firstname');
    }

    if(lastname === ''){
    addError('lastname','Last Name cannot be Empty');
    } else{
    removeError('lastname');
    }

if(email === ''){
    addError('email','Email cannot be Empty');
        } else if(!isValid(email)) {
    addError('email','Email is not valid')
    } else{
    removeError('lastname');
    }

    if(password === ''){
        addError('password','Password cannot be Empty');
    } else{
        removeError('password');
    }

})

function addError(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
    const small = form[field].parentNode.quesrySelector('small');
    small.innerText= message;
}

function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
}



