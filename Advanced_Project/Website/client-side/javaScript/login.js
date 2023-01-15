function init() {
    const loginButton = document.getElementById("login");
    const googleLogin = document.getElementById("googleLogin");
    const emailField = document.getElementById("email");
    const passField = document.getElementById("password");
    var email = "";
    var pass = "";
    var token = '';
  
    emailField.onkeyup = (e) => {
      email = e.target.value;
    };
  
    passField.onkeyup = (e) => {
      pass = e.target.value;
    };
  
    loginButton.addEventListener("click", async (event) => {
      token = await loginUserEmail(email,pass);
      localStorage.setItem('token', token);
      const domain = window.location.origin;
      location.replace(domain + '/event');
    });
  }
  
  //login api
  async function loginUserEmail(e, pass){
      try {
          const res = await postData('http://localhost:5000/user/login/email', {
              email: e,
              password: pass,
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