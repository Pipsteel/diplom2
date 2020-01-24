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
/*---------------------------------------------------------------------*/

let nick = document.getElementById('nickName');
let emailReg = document.getElementById('LogMail');
let passwordReg = document.getElementById('LogPassword');
let emailSing = document.getElementById('SingMail');
let passwordSing = document.getElementById('SingPassword');

let logBtn = document.getElementById('buttLog');
let singBtn = document.getElementById('buttSing');

let user = [];
let users = [];
let userCount = 0;
let usersCards = JSON.parse(localStorage.getItem('myKey'));
let re = 0;
localStorage.setItem('status', re);


function singUsers() {
    userCount += 1 ;
    let user =
        {   id: userCount,
            name: nick.value,
            email: emailReg.value,
            password: passwordReg.value
        };
    console.log(user);
    users.push(user);
    console.log(users);
    localStorage.setItem('myKey', JSON.stringify(users));
    
}
logBtn.addEventListener('click',function () {
    singUsers();
})
//---------------------сохранение данных пользователя ^^^tam
singBtn.addEventListener('click', function () {
    singIn();
})

function singIn(){
    usersCards.map(function (item, index) {
        console.log(item);
        console.log(item.name);
        if ((item.email === emailSing.value)||(item.password === passwordSing)){
            console.log("ccc");
            registration = true;
            re = 0;
            localStorage.setItem('status', '1');
            document.location.href = "./index.html";
        } 
        else {
            console.log("false")
        }
    })
}
