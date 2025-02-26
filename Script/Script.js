login = () =>{
    
    const loginBtn =  document.getElementById('login-btn');
    const accForm = document.getElementById('acc-form');
    const pinForm =  document.getElementById('pin-form');
    loginBtn.addEventListener('click', function(event){
        event.preventDefault()
        const AccNumber  =accForm.value;
        const pinNumber  =  pinForm.value;
        const Account =  parseInt(AccNumber);
        const PIN =  parseInt(pinNumber);
        if (PIN == 1234){
            window.location.href = 'home.html'
        }
        
    })
}
login()