fs = require('fs'); //needs this to implement the fs.readFileSync. fs stands for File Sync

var filename = 'user_data.json'

data = fs.readFileSync(filename, 'utf-8') //it reads the file and waits till it comes back. readFileSync is a blocking system. 

users_reg_data = JSON.parse(data); //converts JavaScript Object Notation into an object

console.log(users_reg_data['itm352'].password); // this shows the username 'itm352' password




