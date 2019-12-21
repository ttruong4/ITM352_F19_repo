fs = require('fs'); //needs this to implement the fs.readFileSync. fs stands for File Sync

var filename = 'user_data.json'

if (fs.existsSync(filename)) {
    fs.statSync(filename)
    
    console.log(filename + ' has' + stats.size + ' characters'); // Tells you have many characters there are in the file user_data.json

    data = fsreadFileSync(filename, 'utf-8'); //creates a boolean and checks if it's true/false

data = fs.readFileSync(filename, 'utf-8') //it reads the file and waits till it comes back. readFileSync is a blocking system. 

users_reg_data = JSON.parse(data); //converts JavaScript Object Notation into an object
}else {
console.log(users_reg_data['itm352'].password); // this shows the username 'itm352' password

}

