const express = require('express')
const app = express()
var mysql = require('mysql')

var con = mysql.createConnection({
    host: "db", 
    user: "root",   
    password: "root", 
    database: "nodedb" 
  });

content='<h1>Hello FullCycle</h1>'
con.connect(function(err) {
    con.query("SELECT firstname, lastname FROM persons", function (err, rows, fields) {        
        content+="<ul>";
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i]
            content+="<li>" + row.firstname + " " + row.lastname + "</li>";
        };    
        content+="</ul>"
    });
});

app.get('/', (req, res) => res.send(content))
app.listen(3000, () => console.log('Server ready'))