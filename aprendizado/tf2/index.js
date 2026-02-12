function enviar(){
    us = document.getElementById('user')
    psw = document.getElementById('pass')
    r = document.getElementById('res')
    
    if(psw.value == us.value){
        r.innerHTML = 'A sua senha nao pode ser igual ao usuario. Atente-se: <ul><li>Deve ter no maximo 15 caracters. <li>Deve ter no minimo 8 caracters. <li>Deve escolher entre numero, letras e simbolos.</ul> '
        document.getElementById('user').value = "";
        document.getElementById('pass').value = "";
    } else{
        r.innerHTML = 'ok'
        document.getElementById('user').value = "";
        document.getElementById('pass').value = "";
    }
}