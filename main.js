// const express = require("express");
// const mongoose = require("mongoose");
// const port = 80;
// const app = express();

// mongoose.connect("mongodb://localhost/projectDG", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// let db = mongoose.connection;

// app.use(express.json());

// // For serving static HTML files
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.set({
//         "Allow-access-Allow-Origin": "*",
//     });

//     // res.send("Hello World");
//     return res.redirect("index.html");
// });

// app.post("/formFillUp", (req, res) => {
//     const name = req.body.name;
//     const reason = req.body.reason;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const city = req.body.city;
//     const state = req.body.state;
//     const addressline = req.body.addressline;

//     const data = {
//         name: name,
//         reason: reason,
//         email: email,
//         phone: phone,
//         city: city,
//         state: state,
//         addressline: addressline,
//     };

//     db.collection("users").insertOne(
//         data, (err, collection) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("Data inserted successfully!");
//         });

//     return res.redirect("formSubmitted.html");
// });

// app.listen(port, () => {
//     console.log(`The application started
// successfully on port ${port}`);
// });




// const Mix = ['apple', 'mango', 'banana', 'oranges', 'pineapple', 'papaya', 'oranges', 1, 2, 3, 4, 5, 6 ,7 , 8 , 'mango']
const Numeric = [120, 80, 40, 100, 60, 50, 465, 789, 8752, 6589, 25896, 1, 2, 8, 6, 7, 8, 9,]
const A1 ={ 
    name: 'Rahul',
    age: 25,
    address: 'Delhi',
    qualification: 'BA'
}
// console.log(fruits)
// console.log(Price)
// Array METHODS
 
// console.log(fruits.indexOf('oranges' ,7))
// console.log(fruits.lastIndexOf('mango', 10))
// // console.log(fruits.find([2,5]))
// // console.log(fruits.findIndex('banana'))
// // console.log(fruits.findLast('banana'))
// // console.log(fruits.findLastIndex('banana'))


// console.log(A1)
// console.log(A1.name)
// console.log(A1.age)
// console.log(A1.qualification)
// console.log(A1.address)
// console.log(Mix)
// console.log(Numeric)


// Array Methods
// const Mix = ['apple', 'mango', 'banana', 'oranges', 'pineapple', 'papaya', 'oranges', 1, 2, 3, 4, 5, 6 ,7 , 8 , 'mango']
// const arry2 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

// console.log(Mix.length)
// console.log(Mix.toString)
// console.log(typeof(Mix))
// console.log(Mix.at(5))
// console.log(Mix.join("*"))
// console.log(Mix.pop())
// console.log(Mix.push("animal"))
// console.log(Mix.shift())
// console.log(Mix.unshift("thisisundshift"))
// console.log(Mix)
// let arr1 = Mix.concat(Numeric)
// console.log(arr1)
// console.log(Mix.concat(Numeric)) 
// console.log(arr1.flat())

// let array3 = arry2.flatMap(x => [x+4 , x*5 , x-1])
// console.log(array3)
// console.log(arry2.splice(3, 1, 'c','b'))
// console.log(arry2)


// const result = Mix.map((x) => {
//     if (typeof x === 'number') {
//         return x * 10;     }
//     return x; 
// });

// console.log(result);
// ['apple', 'mango', 'banana', 'oranges', 'pineapple', 'papaya', 'oranges', 2, 4, 6, 8, 10, 12, 14, 16, 'mango']


// newarray = [];
// newarray[0]="5";
// newarray[1]="2";
// newarray[2]="20";
// newarray[3]="40";
// newarray[4]="60";
// if (newarray[2] == "20" ){
//     console.log("true");  
// }
// else {
//     console.log("xx");  
// };


const as2 = ['i', 1, 'n', 3, '4', 8, 'new']

     