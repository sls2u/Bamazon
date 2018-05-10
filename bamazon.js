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
let promptCustomer = (res) => {
  inquirer.prompt([{
    name: "choice",
    type: "input",
    message: "What Item would you like to buy?"
  }]).then(function(answer) {
      let correct = false;
      for (var i = 0; i < res.length; i++) {
        if (res[i].product_name == answer.choice) {
          correct === true;
          let product_name = answer.choice;
          let id = i;
          inquirer.prompt({
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
            validate: (value) => {
              if (isNaN(value) === false) {
                return true;
              } else {
                return false;
              }
            }
          })
        }
      }
    })
  }
          // }).then(answer => {
//             if ((res[id].stock_quantity - answer.quantity) > 0) {
//               connection.query("update products set stock_quantity='" + (res[id].stock_quantity - answer.quantity) + "' where product_name= '" + product + "'", (err, res) => {
//                 console.log('product bought');
//                 makeTable();
//               })
//
//             } else {
//               console.log('not a valid pick');
//               promptCustomer(res);
//             }
//
          // })
//       }
//     }
//   })
// }
