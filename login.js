// function login

function login(){
    const username = document.getElementById('uname').value;
    console.log(username);

     // add username to localstorage
     localStorage.setItem("uname",username);

     // redirect to home(dashboard)
     window.location = './dashboard.html';


}
