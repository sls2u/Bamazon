const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Welcome123",
  database: "bamazon"
});
connection.connect((err) => {
  if (err) throw err;
  console.log('connected');
  makeTable();
});

let makeTable = function() {
  connection.query("select *from products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + "|| " + res[i].stock_quantity + "\n");
    }
    promptCustomer(res);
  });
}
let promptCustomer = function(res) {
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What Item would you like to buy?"
  }]).then(function(answer) {
    let correct = false;
    for (var i = 0; i < res.length; i++) {
      correct === true;
      let product = answer.choice;
      let id = i;
      inquirer.prompt({

      })
    }
  })
}
