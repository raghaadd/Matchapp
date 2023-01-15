function init(){
    const registerButton = document.getElementById('register');
const googleRegister = document.getElementById('googleReg');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const usernameFeild = document.getElementById('username');
const phoneFeild = document.getElementById('phoneNumber');
var email, pass, username, phone;
var token = '';

emailField.onkeyup = (e) => {
    email = e.target.value;
}

passField.onkeyup = (e) => {
    pass = e.target.value;
}

usernameFeild.onkeyup = (e) => {
    username = e.target.value;
}

phoneFeild.onkeyup = (e) => {
    phone = e.target.value;
}


registerButton.addEventListener('click', async (event) => {
    token = await registerUser(email,pass,username,phone);
    localStorage.setItem('token', token);
    const domain = window.location.origin;
    location.replace(domain + '/event');
});

//google register api
googleRegister.addEventListener('click', (event) => {
   
});
}


//register api
async function registerUser(e, pass, user, num){
    try {
        const res = await postData('http://localhost:5000/user/register', {
            email: e,
            password: pass,
            username: user,
            phonenumber: num,
        });
        return res.token;
    } catch (error) {
        console.log('Error occured while fetching:' + error);
    }
}

async function postData(url = '', data={}){
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      return response.json();
}