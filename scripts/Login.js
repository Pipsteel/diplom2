document.getElementById('SingInCard').style.display = 'none';

document.getElementById('singinBtn').addEventListener("click", function(){
    btnSingin();
});
function btnSingin(){
    document.getElementById('LogInCard').style.display = 'none' 
    document.getElementById('SingInCard').style.display = 'flex';
}

document.getElementById('loginBtn').addEventListener("click", function(){
    btnLogin();
});
function btnLogin(){
    document.getElementById('LogInCard').style.display = 'flex' 
    document.getElementById('SingInCard').style.display = 'none';
}

document.getElementById('buttLog').addEventListener('click', function () {
 ter();
});
function ter() {
    let t = document.getElementById('nickName');
    console.log(t.value);
}