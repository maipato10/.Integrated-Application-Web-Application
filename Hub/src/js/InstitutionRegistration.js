// do not forget to initialize your app with the Backendless.initApp( appId, apiKey ) call
const APP_ID = 'D6F24EF3-973C-6767-FF0A-1A3AA25B9300';
const API_KEY = '66456480-A606-E33D-FF39-2AE84754CA00';

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

function userRegistered(user) {
    alert("user has been registered");
}

function gotError(err) // see more on error handling
{
    alert("error message - " + err.message);
    alert("error code - " + err.statusCode);
}

var user = new Backendless.User();
user.email = "mzi@cut.ac.za";
user.Role = "Institution";
user.Name = "Central University Of Technology"
user.password = "Minded@10";

Backendless.UserService.register(user).then(userRegistered).catch(gotError);