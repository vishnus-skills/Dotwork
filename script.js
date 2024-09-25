let password = document.getElementById('password');
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        toggleBtn.classList.add('hide')
    }else{
        password.type = "password";
        toggleBtn.classList.remove('hide')
    }
}

