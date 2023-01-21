//npm install --save express
//npm install --save mysql
//npm install mysql

const express = require("express");
const app = express();

app.listen(3000, function ()
{
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'sys',
    user: 'root',
    password: 'root',
    port: 3306
});

let result;

connection.query('SELECT * FROM bookings', (err, rows) =>
{
    result = Object.values(JSON.parse(JSON.stringify(rows)));
});

app.get("/", function (request, response)
{
    response.send(result);
});