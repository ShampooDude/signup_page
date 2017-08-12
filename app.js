// Root User: shampoodude
// Database Name: c9

// IMPORT PACKAGES
var faker = require('faker');
var mysql = require('mysql');

// SETUP MYSQL CONNECTION
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'shampoodude',
    database : 'join_us'
});

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function(error, results, fields){
//     if(error) throw error;
//     console.log(results[0].total);
// });

// INSERTING DATA (HARD CODING INSERTING)
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
// connection.query(q, function(error, results, fields){
//   if(error) throw error;
//   console.log(results);
// });

// INSERTING DATA TAKE 2 (DYNAMIC CODING INSERTING)
// var person = {
//     email: faker.internet.email(),  // Random email generated by faker package
//     created_at: faker.date.past()   // Random datetime generated by faker package
// };   

// connection.query('INSERT INTO users SET ?', person, function(error, result){
//   if(error) throw error;
//   console.log(result);
// });

// INSERTING LOTS OF DATA !!!==========================
// var data = [];
// for(var i = 0; i < 500; i++){
//         data.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// }
// var q ='INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result){
//   if(err) throw err;
//   console.log(result);
// });
connection.end();   // Close connection