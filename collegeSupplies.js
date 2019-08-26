var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

//connecting to my database from mysql
var connection = mysql.createConnection({
    host: "127.0.0.1",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "=LizWiens2342",
    database: "collegeSupplies_DB"
});

connection.connect();

var display = function(){

    //connection query 1 for sales table
    connection.query("SELECT * FROM sales   ", function (err, res) {
        if (err) throw err;
        console.log("-------------------------------------------------");
        console.log("       Welcome to College Supplies      ");
        console.log("-------------------------------------------------");
        console.log("");
        console.log("Sales Graph");
        console.log("");
        // below will disconnect you from DB
        //connection.end();
//creates table in terminal that reflects mysql table, reason for cli table2 dependency 
        var table = new Table({
            head: ['id', 'year', 'month', 'customer','state_id', 'product_id', 'quantity', 'billed'],
             colWidths: [12, 20, 20],
             colAligns: ['center', 'left', 'left'],
             style: {
                 head: ['aqua'],
                 compact: true
             }
        });
        for (var i = 0; i< res.length; i++){
            table.push([res[i].id, res[i].year, res[i].month, res[i].customer, res[i].state_id, res[i].product_id, res[i].quantity, res[i].billed]);
        }
        console.log(table.toString());
        console.log("");
        //shopping();
    });



    connection.query("SELECT * FROM state   ", function (err, res) {
        if (err) throw err;
        console.log("-------------------------------------------------");
        console.log("       state graph     ");
        console.log("-------------------------------------------------");
       
        console.log("");
        // below will disconnect you from DB
        //connection.end();
//creates table in terminal that reflects mysql table, reason for cli table2 dependency 
        var table1 = new Table({
            head: ['state_id', 'state_name'],
             colWidths: [12, 20],
             colAligns: ['center', 'left'],
             style: {
                 head: ['aqua'],
                 compact: true
             }
        });
        for (var i = 0; i< res.length; i++){
            table1.push([res[i].state_id, res[i].state_name]);
        }
        console.log(table1.toString());
        console.log("");
        //shopping();
    });


    connection.query("SELECT * FROM product   ", function (err, res) {
        if (err) throw err;
        console.log("-------------------------------------------------");
        console.log("       product graph     ");
        console.log("-------------------------------------------------");
       
        console.log("");
        // below will disconnect you from DB
        //connection.end();
//creates table in terminal that reflects mysql table, reason for cli table2 dependency 
        var table2 = new Table({
            head: ['product_id', 'product_desc'],
             colWidths: [12, 20],
             colAligns: ['center', 'left'],
             style: {
                 head: ['aqua'],
                 compact: true
             }
        });
        for (var i = 0; i< res.length; i++){
            table2.push([res[i].product_id, res[i].product_desc]);
        }
        console.log(table2.toString());
        console.log("");
        //shopping();
    });





};
display();