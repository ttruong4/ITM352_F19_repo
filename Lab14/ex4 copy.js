var express = require('express');
var app = express();
var myParser = require("body-parser");

app.use(myParser.urlencoded({ extended: true }));




fs = require('fs'); //needs this to implement the fs.readFileSync. fs stands for File Sync

var filename = 'user_data.json'

if (fs.existsSync(filename)) {
stats = fs.statSync(filename)
    
console.log(filename + ' has' + stats.size + ' characters'); // Tells you have many characters there are in the file user_data.json

data = fs.readFileSync(filename, 'utf-8'); //creates a boolean and checks if it's true/false

data = fs.readFileSync(filename, 'utf-8') //it reads the file and waits till it comes back. readFileSync is a blocking system. 

users_reg_data = JSON.parse(data); //converts JavaScript Object Notation into an object
/*
username = 'newuser';
users_reg_data[username] = {};
reg_data[username].password = 'newpass';
reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(users_reg_data));
*/
    console.log(typeof users_reg_data['itm352']); // this shows whether or not someone has the username yet

} else {
    console.log(filename + ' doesnot exist!');
}

var user_product_quantities = {};
app.get("/purchase", function (request, response) {
    //quantity data in query string
    user_product_quantities = request.query;
    //do the validation etc 

    //if not valid, go back to product display

    //otherwise, go to login
    response.redirect(`/login`);
    
});

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body);
    the_username = request.body.username;
    if(typeof users_reg_data[the_username] != 'undefined' ) { 
       if (users_reg_data[the_username].password == request.body.password) {
           response.send('/invoice');
       } else {
           response.redirect('/login');
       }
    }
});

//spacer

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form

    // validate registration data
    
    //all good so save the new user

    
username = request.body.username;
users_reg_data[username] = {};
reg_data[username].password = request.body.password;
reg_data[username].email = request.body.email;

fs.writeFileSync(filename, JSON.stringify(users_reg_data));

response.send(`${username} registered!`);
 });

//spacerend

app.listen(8080, () => console.log(`listening on port 8080`));

//npm install express 
//npm install body parser