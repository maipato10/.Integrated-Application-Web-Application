// do not forget to initialize your app with the Backendless.initApp( appId, apiKey ) call
const APP_ID = 'D6F24EF3-973C-6767-FF0A-1A3AA25B9300';
const API_KEY = '66456480-A606-E33D-FF39-2AE84754CA00';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

const $email = document.getElementById('universityEmail');
const $name = document.getElementById('universityName');
const $password = document.getElementById('universityPassword');
const $password2 = document.getElementById('universityPassword2');
const $btnRegister = document.getElementById('register');


function saveObject() {
    Backendless.UserService.register(user).then(userRegistered).catch(gotError);
}


function userRegistered(user) {
    console.log("user has been registered");
}

function gotError(err) // see more on error handling
{
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}

var user = new Backendless.User();
user.email = "thatohatsi@cut.ac.za";
user.Role = "Institution";
user.Name = "Central University Of Technology"
user.password = "Minded@10";
document.getElementById("register").addEventListener("click", saveObject);


