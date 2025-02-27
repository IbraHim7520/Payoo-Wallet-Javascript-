login = () =>{
    
    const loginBtn =  document.getElementById('login-btn');
    const accForm = document.getElementById('acc-form');
    const pinForm =  document.getElementById('pin-form');
    const errorBox =  document.getElementById("alert-container");
    loginBtn.addEventListener('click', function(event){
        event.preventDefault()
        const AccNumber  =accForm.value;
        const pinNumber  =  pinForm.value;
        const Account =  parseInt(AccNumber);
        const PIN =  parseInt(pinNumber);
        if (PIN === 1234){
            window.location.href = 'home.html'
        }else{
            const div =  document.createElement('div');
            div.role = 'alert';
            div.classList.add = 'alert alert-error';
            const span = document.createElement('span');
            span.innerText = 'Error! Failed to login';
            div.appendChild(span);
            errorBox.appendChild(div);
        }
    })
}
login()
