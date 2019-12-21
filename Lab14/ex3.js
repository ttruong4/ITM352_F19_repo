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
    console.log(users_reg_data); // this shows the username 'itm352' password 

} else {
    console.log(filename + ' doesnot exist!');
}


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
           response.send(the_username + ' logged in!');
       } else {
           response.redirect('/login');
       }
    }
});

app.listen(8080, () => console.log(`listening on port 8080`));

//npm install express 
//npm install body parser